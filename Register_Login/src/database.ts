import sql from 'mssql'
import { newconfig } from "./Config/Convict"

export const pool = new sql.ConnectionPool(newconfig._instance.db)

