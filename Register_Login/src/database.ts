import sql from 'mssql'
import {databaseConfig} from './Config/databaseConfig'
console.log(databaseConfig)

export const pool = new sql.ConnectionPool(databaseConfig as any)
