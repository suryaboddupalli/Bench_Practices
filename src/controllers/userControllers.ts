import Hapi from '@hapi/hapi'
import { dbServer } from '../database'
import { registerData, loginData, RefreshToken, userInterface } from '../intefaces/index'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../constants/index'
import bcrypt from 'bcryptjs'
import { accessToken, refreshToken, verifyRefreshToken, verifyAccessToken } from '../helpers/jwtHelpers'
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
            const promise = new Promise(async (resolve, reject) => {
                const tokenVerify = verifyAccessToken(token)
                if (tokenVerify) {
                    const data = await pool.query("exec getData @id='" + tokenVerify.id + "'")
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
            const userRegisterData = req.payload as registerData
            const pool = await dbServer
            const registerPromise = new Promise(async (resolve, reject) => {
                const hashedPassword = await bcrypt.hash(userRegisterData.password, salt)
                const query = "exec registration @email='" + userRegisterData.email + "',@firstname='" + userRegisterData.firstname + "',@lastname='" + userRegisterData.lastname + "',@password='" + hashedPassword + "';"
                const userData = await pool.query(query)
                const user: userInterface = userData.recordset[0]
                if (user) {
                    const access = accessToken(user.id)
                    const refresh = refreshToken(user.id)
                    if (access) {
                        cluster.set("currentUser", JSON.stringify(user))
                    }
                    const response = res.response({
                        access,
                        refresh,
                        message: "user added successfully",
                        data: user
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
            const userLoginData = req.payload as loginData
            const pool = await dbServer
            const loginPromise = new Promise(async (resolve, reject) => {
                const emailCheck = await pool.query("exec email_Check  @email='" + userLoginData.email + "'")
                const user: userInterface = emailCheck.recordset[0]
                if (user) {
                    const passwordCheck = await bcrypt.compare(userLoginData.password, user.password)
                    if (passwordCheck) {
                        const access = accessToken(user.id)
                        const refresh = refreshToken(user.id)
                        if (access) {
                            cluster.set("currentUser", JSON.stringify(user))
                        }
                        const response = res.response({
                            access,
                            refresh,
                            message: "User Logged In Successfully",
                            data: user
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
                const access = accessToken(userId.id)
                const refresh = refreshToken(userId.id)
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