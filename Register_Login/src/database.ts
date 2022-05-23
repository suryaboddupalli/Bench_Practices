import sql from 'mssql'
import { databaseConfig } from './Config/databaseConfig'
import { newconfig } from "./Config/Convict"

// export const pool = new sql.ConnectionPool(databaseConfig as any)
export const pool = new sql.ConnectionPool(newconfig._instance.db)

