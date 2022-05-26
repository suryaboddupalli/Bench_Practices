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
exports.reg = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = require("../database");
const mssql_1 = require("mssql");
const ValidationSchema_1 = require("../ValidationSchema");
const JwtHelpers_1 = require("../Helpers/JwtHelpers");
const Redis_1 = require("../Redis");
const reg = (req, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Data = req.payload;
        const server = yield database_1.pool.connect();
        const registerPromise = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const { error, value } = ValidationSchema_1.registerSchema.validate(Data);
            if (error) {
                resolve(error.details[0].message);
            }
            else {
                const emailcheck = yield server.request()
                    .input('email', (0, mssql_1.VarChar)(30), value.email)
                    .execute('email_Check');
                if (emailcheck.recordset[0]) {
                    resolve('User Already exist');
                }
                else {
                    const hashedPassword = yield bcryptjs_1.default.hash(value.password, 10);
                    const Data = yield server.request()
                        .input('firstname', (0, mssql_1.VarChar)(30), value.firstname)
                        .input('lastname', (0, mssql_1.VarChar)(30), value.lastname)
                        .input('email', (0, mssql_1.VarChar)(30), value.email)
                        .input('mobile', value.mobile)
                        .input('password', hashedPassword)
                        .execute('register');
                    if (Data.recordset) {
                        const token = yield (0, JwtHelpers_1.signAccessToken)(Data.recordset[0].id);
                        const refresh = yield (0, JwtHelpers_1.refreshToken)(Data.recordset[0].id);
                        const data = Data.recordset[0];
                        if (token) {
                            Redis_1.client.set('currUser', JSON.stringify(data));
                        }
                        const res = response.response({
                            token,
                            refresh,
                            message: "user added successfully",
                            data
                        });
                        resolve(res);
                    }
                }
            }
        }));
        return registerPromise;
    }
    catch (err) {
        console.log(err);
    }
});
exports.reg = reg;
