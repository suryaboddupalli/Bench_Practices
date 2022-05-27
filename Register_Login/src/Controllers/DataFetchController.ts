import hapi from '@hapi/hapi'
import { pool } from '../database'
import jwt from 'jsonwebtoken'
import { newconfig } from '../Config/Convict'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'


export const DataFetchController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        const data = await (await pool.connect()).query('select * from users')
        const promise: any = new Promise((resolve, reject) => {
            jwt.verify(token, newconfig._instance.Jwt.accessSecret, (err: any, val: any) => {
                if (err) {
                    const response = res.response("invalid token").code(BAD_REQUEST)
                    resolve(response)
                }
                else {
                    if (data) {
                        const response = res.response(data.recordset).code(SUCCESS)
                        resolve(response)
                    }
                }
            })
        });
        return promise
    }
    catch (err) {
        res.response({ err }).code(INTERNAL_SERVER_ERROR)
    }
}