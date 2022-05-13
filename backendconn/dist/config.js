"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
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
// require('dotenv').config()
// interface configData {
//     user: string;
//     password: string;
//     server: string;
//     database: string;
//     port: string;
//     driver: string;
//     options: {
//         trustServerCertificate: boolean;
//     };
// }
// export const Config = {
//     user: process.env.user,
//     password: process.env.password,
//     server: process.env.server,
//     database: process.env.datebase,
//     port: process.env.port,
//     driver: 'tedious',
//     options: {
//         trustServerCertificate: true
//     }
// };
