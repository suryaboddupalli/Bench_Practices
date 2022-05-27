import sql from 'mssql'
import { Config } from "./Config/Convict"

export const pool = new sql.ConnectionPool(Config.get('db'))

