require('dotenv').config()

interface ConfigData {
    user: string|undefined;
    password: string|undefined;
    server: string|undefined;
    database: string|undefined;
    port: number;
    options: {
        trustServerCertificate: boolean;
    };
}

export const Config:ConfigData = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: 1433,
    // driver: 'tedious',
    options: {
        trustServerCertificate: true
    }
}



