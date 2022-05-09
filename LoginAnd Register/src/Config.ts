import dotenv from 'dotenv'
dotenv.config()

const Config = {
    database: process.env.dbName,
    server: 'localhost',
    username:process.env.dbUsername,
    password:process.env.dbPassword,
    encrypt: true,
    options: {
        trustServerCertificate: true
    }
}

export default Config