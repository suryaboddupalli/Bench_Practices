"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = require("../database");
const mssql_1 = require("mssql");
const ValidationSchema_1 = require("../ValidationSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const LoginController = (req, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Data = req.payload;
        const server = yield database_1.pool.connect();
        const loginpromise = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const { error, value } = ValidationSchema_1.loginSchema.validate(Data);
            if (error) {
                console.log(error.details[0].message);
                resolve(error.details[0].message);
            }
            else {
                const emailcheck = yield server.request()
                    .input('email', (0, mssql_1.VarChar)(30), value.email)
                    .execute('email_Check');
                if (emailcheck.recordset[0]) {
                    console.log(emailcheck.recordset[0]);
                    const pass = yield bcryptjs_1.default.compare(value.password, emailcheck.recordset[0].password);
                    console.log(pass);
                    if (pass) {
                        // console.log("hello")
                        const secert = process.env.TOKEN_SECERT;
                        const token = yield jsonwebtoken_1.default.sign(emailcheck.recordset[0].id, secert);
                        console.log(token);
                        if (token) {
                            resolve(emailcheck.recordset[0]);
                        }
                    }
                }
                else {
                    resolve("User Not Found. Please Do Register..");
                }
            }
        }));
        return loginpromise;
    }
    catch (err) {
        console.log(err);
    }
});
exports.LoginController = LoginController;
