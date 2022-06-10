import Hapi from '@hapi/hapi'
import { dbServer } from '../database'
import { registerData, loginData, RefreshToken, userInterface } from '../intefaces/index'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../constants/index'
import bcrypt from 'bcryptjs'
import { accessToken, refreshToken, verifyRefreshToken, verifyAccessToken } from '../helpers/jwtHelpers'
import { config } from '../convict/config'
import { cluster } from '../redis'
import {
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    REFERSH_TOKEN_SUCCESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_PASSWORD_INCORRECT,
    ACCESS_TOKEN_VERIFY_FAIL,
    REFERSH_TOKEN_FAIL
} from '../constants/index'
import { getUserDataQuery, registerQuery, loginQuery } from '../Repository/index'

const salt = config.get('bcrypt')

class userControllers {
    async getUser(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const pool = await dbServer
            const authHeader = req.headers['authorization']
            const bearerToken = authHeader.split(' ')
            const tokenVerifyResponse = verifyAccessToken(bearerToken[1])
            if (tokenVerifyResponse.id) {
                const data = await pool.query(getUserDataQuery(tokenVerifyResponse.id))
                return res.response(data.recordset).code(SUCCESS)
            } else {
                return res.response(ACCESS_TOKEN_VERIFY_FAIL).code(SUCCESS)
            }
        }
        catch (err) {
            return res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    }

    async register(req: registerData, res: Hapi.ResponseToolkit) {
        try {
            const pool = await dbServer
            const hashedPassword = await bcrypt.hash(req.payload.password, salt)
            const userData = await pool.query(registerQuery(req.payload, hashedPassword))
            if (userData.recordset) {
                const access = accessToken(userData.recordset[0].id)
                const refresh = refreshToken(userData.recordset[0].id)
                if (access) {
                    cluster.set(userData.recordset[0].id, JSON.stringify(userData.recordset[0]))
                }
                return res.response({
                    access,
                    refresh,
                    message: USER_REGISTER_SUCCESS,
                    data: userData.recordset[0]
                }).code(SUCCESS)
            }
            else {
                return res.response(USER_REGISTER_FAILURE).code(BAD_REQUEST)
            }
        }
        catch (err) {
            return res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    }


    async login(req: loginData, res: Hapi.ResponseToolkit) {
        try {
            const pool = await dbServer
            await pool.query(loginQuery(req.payload.email), async (err: any, data: any) => {
                if (data.recordset[0]) {
                    bcrypt.compare(req.payload.password, data.recordset[0].password, async (err, result) => {
                        if (result) {
                            const access = accessToken(data.recordset[0].id)
                            const refresh = refreshToken(data.recordset[0].id)
                            if (access) {
                                cluster.set(data.recordset[0].id, JSON.stringify(data.recordset[0]))
                            }
                            return res.response({
                                access,
                                refresh,
                                message: USER_LOGIN_SUCCESS,
                                data: data
                            }).code(SUCCESS)
                        }
                        else {
                            return res.response(USER_PASSWORD_INCORRECT).code(BAD_REQUEST)
                        }
                    })
                }
                else {
                    return res.response(USER_LOGIN_FAILURE).code(BAD_REQUEST)
                }
            })
        }
        catch (err) {
            res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }
    }

    async refreshRequest(req: RefreshToken, res: Hapi.ResponseToolkit) {
        try {
            if (!req.payload) {
                return res.response(REFERSH_TOKEN_FAIL).code(BAD_REQUEST)
            }
            const userId = verifyRefreshToken(req.payload.refreshToken)
            const access = accessToken(userId.id)
            const refresh = refreshToken(userId.id)
            return res.response({
                access,
                refresh,
                message: REFERSH_TOKEN_SUCCESS

            }).code(SUCCESS)
        }
        catch (err) {
            return res.response({ err }).code(INTERNAL_SERVER_ERROR)
        }

    }
}

export const controller = new userControllers()