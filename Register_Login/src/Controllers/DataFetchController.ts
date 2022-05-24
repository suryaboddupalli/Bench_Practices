import hapi from '@hapi/hapi'
import { pool } from '../database'
import jwt from 'jsonwebtoken'
import { newconfig } from '../Config/Convict'


export const DataFetchController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        const data = await (await pool.connect()).query('select * from users')
        const promise: any = new Promise((resolve, reject) => {
            jwt.verify(token, newconfig._instance.Jwt.accessSecret, (err: any, val: any) => {
                if (err) {
                    resolve(err)
                }
                else {
                    if (data) {
                        resolve(data.recordset)
                    } else {
                        reject('error')
                    }
                }
            })
        });
        return promise
    }
    catch (err) {
        console.log(err)
    }
}