"use strict";
// require('dotenv').config()
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
// interface ConfigData {
//     user: string|undefined;
//     password: string|undefined;
//     server: string|undefined;
//     database: string|undefined;
//     port: number;
//     options: {
//         trustServerCertificate: boolean;
//     };
// }
// export const Config:ConfigData = {
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     server: process.env.SERVER,
//     database: process.env.DATABASE,
//     port: 1433,
//     // driver: 'tedious',
//     options: {
//         trustServerCertificate: true
//     }
// }
exports.Config = {
    user: 'sa',
    password: 'Admin@12345',
    server: 'ASPIRENAV567\\SQLEXPRESS',
    database: 'usersdb',
    port: 1433,
    driver: 'tedious',
    options: {
        trustServerCertificate: true
    }
};
