"use strict";
// require('dotenv').config()
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
// export interface configData {
//     user?: string;
//     password?: string;
//     server?: string;
//     database?: string;
//     port?: string;
//     driver?: string;
//     options: {
//         trustServerCertificate: boolean;
//     };
// }
// export const Config:configData= {
//     user: process.env.user,
//     password: process.env.password,
//     server: process.env.server,
//     database: process.env.database,
//     port: process.env.port,
//     driver: 'tedious',
//     options: {
//         trustServerCertificate: true
//     }
// };
exports.Config = {
    user: 'sa',
    password: 'Admin@12345',
    server: 'ASPIRENAV567\\SQLEXPRESS',
    database: 'firstdb',
    port: 1433,
    driver: 'tedious',
    options: {
        trustServerCertificate: true
    }
};
