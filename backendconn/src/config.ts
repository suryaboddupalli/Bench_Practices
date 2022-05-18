require('dotenv').config()

export interface configData {
    user?: string;
    password?: string;
    server?: string;
    database?: string;
    port?: string;
    driver?: string;
    options: {
        trustServerCertificate: boolean;
    };
}

export const Config:configData= {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    port: process.env.port,
    driver: 'tedious',
    options: {
        trustServerCertificate: true
    }
};

