import sql from 'mssql'
import { databaseConfig } from './Config/databaseConfig'
console.log(databaseConfig)
import {newconfig} from "./Config/Convict"

console.log(newconfig._instance.db)

// export const pool = new sql.ConnectionPool(databaseConfig as any)
export const pool = new sql.ConnectionPool(newconfig._instance.db)

