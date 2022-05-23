"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
require('dotenv').config();
exports.databaseConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    port: 1433,
    driver: 'tedious',
    options: {
        trustServerCertificate: true
    }
};
