"use strict";
// export const Config = {
//     user: 'sa',
//     password: 'Admin@12345',
//     server: 'ASPIRENAV567\\SQLEXPRESS',
//     database: 'firstdb',
//     port: 1433,
//     driver: 'tedious',
//     options: {
//         trustServerCertificate: true
//     }
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require('dotenv').config();
exports.Config = {
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
