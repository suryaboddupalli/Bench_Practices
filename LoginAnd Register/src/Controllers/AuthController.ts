import Hapi from '@hapi/hapi'
import sql from 'mssql'
import config from "../Config"
import { userRegisterSchema,loginDataSchema } from '../Validations/Validation'
import {log} from '../app'

// const conn = sql.connect(config)

export const register = async (request: Hapi.Request, response: Hapi.ResponseToolkit): Promise<any> => {
    try {
        const registerData = await request.payload
         await userRegisterSchema.validateAsync(registerData)
        .then((res)=>console.log(res))
        console.log(registerData)
        log.info('register')
        return await response.response("completed")
        // await userRegisterSchema.validateAsync(registerData)
        //     .then((res) => {
        //         console.log(res)
        //         response.response(res)
        //         log.info('register')
        //         return null
        //     }).catch(err => {
        //         console.log(err.details[0])
        //         log.warn('error')
        //     })
    }
    catch (err) {
        console.log(err);
    }
}

export const login = async (request: Hapi.Request, response: Hapi.ResponseToolkit): Promise<any> => {
    try {
        const loginData = request.payload
        await loginDataSchema.validateAsync(loginData)
            .then((res) => {
                console.log(res)
                response.response(res)
                return log.info('login')
            }).catch(err => {
                console.log(err.details[0])
            })
    }
    catch (err) {
        console.log(err);
    }
}