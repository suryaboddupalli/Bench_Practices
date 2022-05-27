import hapi from '@hapi/hapi'
import { pool } from '../database'
import jwt from 'jsonwebtoken'
import { Config } from '../Config/Convict'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'


export const DataFetchController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    const authHeader = req.headers['authorization']
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1]
    const data = await (await pool.connect()).query('select * from users')
    const tokenVerify = jwt.verify(token, Config._instance.Jwt.accessSecret)
    console.log(tokenVerify)
    if (tokenVerify) {
        return res.response(data)
    }
}
