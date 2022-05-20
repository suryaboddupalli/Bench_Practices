import hapi from '@hapi/hapi'
import {pool} from "../database"

export const DataFetchController= async(req: hapi.Request, res: hapi.ResponseToolkit) =>{
    try {
        const data = await (await pool.connect()).query('select * from users')
        const promise: any = new Promise((resolve, reject) => {
            if (data) {
                resolve(data)
                res.response(data)
                console.log(data)
            } else {
                reject("error")
            }
        });
        return promise
    }
    catch (err) {
        console.log(err)
    }
}