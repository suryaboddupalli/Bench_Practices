import sql from 'mssql'
import { config } from './convict/config'


export const dbServer = new sql.ConnectionPool(config.get('db')).connect()
    .then((res:any) => {
        console.log("DB is Connected")
        return res
    })
    .catch(err => {
        console.log(err)
    })
