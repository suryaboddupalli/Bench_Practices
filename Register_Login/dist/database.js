"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mssql_1 = __importDefault(require("mssql"));
const databaseConfig_1 = require("./Config/databaseConfig");
console.log(databaseConfig_1.databaseConfig);
exports.pool = new mssql_1.default.ConnectionPool(databaseConfig_1.databaseConfig);
