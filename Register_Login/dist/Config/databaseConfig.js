"use strict";
// require('dotenv').config()
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
// export const databaseConfig = {
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     server: process.env.SERVER,
//     database: process.env.DATABASE,
//     port: 1433,
//     driver: 'tedious',
//     options: {
//         trustServerCertificate: true
//     }
// }
exports.databaseConfig = {
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
