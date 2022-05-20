require('dotenv').config()

export const databaseConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: 1433,
    driver: 'tedious',
    options: {
        trustServerCertificate: true
    }
}
  