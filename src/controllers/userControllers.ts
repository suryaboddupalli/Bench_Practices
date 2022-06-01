import Hapi from '@hapi/hapi'
import { dbServer } from '../database'
import { registerData, loginData, RefreshToken } from '../intefaces/index'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../constants/index'
import bcrypt from 'bcryptjs'
import { accessToken, refreshToken, verifyRefreshToken, verifyAccessToken } from '../plugins/jwtPlugins'
import { config } from '../convict/config'
import { cluster } from '../redis'

const salt = config.get('bcrypt')

class userControllers {
    async getUser(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const authHeader = req.headers['authorization']
            const bearerToken = authHeader.split(' ')
            const token = bearerToken[1]
            const pool = await dbServer
            const promise: any = new Promise(async (resolve, reject) => {
                const tokenVerify = verifyAccessToken(token)
                if (tokenVerify) {
                    const data = await pool.query('exec getData')
                    const response = res.response(data.recordset).code(SUCCESS)
                    resolve(response)
                }
            });
            return promise
        }
        catch (error) {
            console.log(error);
        }
    }

    async register(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const userRegisterData = req.payload
            const pool = await dbServer
            const registerPromise = new Promise(async (resolve: any, reject: any) => {
                const hashedPassword = await bcrypt.hash((userRegisterData as registerData).password, salt)
                const query = "exec registration @email='" + (userRegisterData as registerData).email + "',@firstname='" + (userRegisterData as registerData).firstname + "',@lastname='" + (userRegisterData as registerData).lastname + "',@password='" + hashedPassword + "';"
                const userData = await pool.query(query)
                if (userData.recordset[0]) {
                    const access = accessToken(userData.recordset[0].id)
                    const refresh = refreshToken(userData.recordset[0].id)
                    if (access) {
                        cluster.set("currentUser", JSON.stringify(userData.recordset[0]))
                    }
                    const response = res.response({
                        access,
                        refresh,
                        message: "user added successfully",
                        data: userData.recordset[0]
                    }).code(SUCCESS)
                    resolve(response)
                }
                else {
                    const response = res.response('User Already exist').code(BAD_REQUEST)
                    resolve(response)
                }

            })
            return registerPromise
        }
        catch (err) {
            res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    }


    async login(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const userLoginData = req.payload
            const pool = await dbServer
            const loginPromise = new Promise(async (resolve: any, reject) => {
                const emailCheck = await pool.query("exec email_Check  @email='" + (userLoginData as loginData).email + "'")
                if (emailCheck.recordset[0]) {
                    const passwordCheck = await bcrypt.compare((userLoginData as loginData).password, emailCheck.recordset[0].password)
                    if (passwordCheck) {
                        const access = accessToken(emailCheck.recordset[0].id)
                        const refresh = refreshToken(emailCheck.recordset[0].id)
                        if (access) {
                            cluster.set("currentUser", JSON.stringify(emailCheck.recordset[0]))
                        }
                        const response = res.response({
                            access,
                            refresh,
                            message: "User Logged In Successfully",
                            data: emailCheck.recordset[0]
                        }).code(SUCCESS)
                        resolve(response)
                    }
                    else {
                        const response = res.response('Incorrect Password').code(BAD_REQUEST)
                        resolve(response)
                    }
                }
            })
            return loginPromise
        }
        catch (err) {
            res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    }

    async refreshRequest(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const token = req.payload
            const promise = await new Promise(async (resolve, reject) => {
                if (!token) {
                    const response = res.response('Token is Required').code(BAD_REQUEST)
                    resolve(response)
                }
                const userId = verifyRefreshToken((token as RefreshToken).refreshToken)
                const access = accessToken(userId as string)
                const refresh = refreshToken(userId as string)
                const response = res.response({
                    access,
                    refresh,
                    message: 'Refreshed Successfully'
                }).code(SUCCESS)
                resolve(response)
            })
            return promise
        }
        catch (err) {
            res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }

    }
}

export const controller = new userControllers()