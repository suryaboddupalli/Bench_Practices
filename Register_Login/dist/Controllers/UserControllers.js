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
exports.RefreshController = exports.RegisterController = exports.LoginController = exports.DataFetchController = void 0;
const database_1 = require("../database");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Convict_1 = require("../Config/Convict");
const http_1 = require("../Constants/http");
const ValidationSchema_1 = require("../ValidationSchema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const JwtHelpers_1 = require("../Helpers/JwtHelpers");
const Redis_1 = require("../Redis");
const mssql_1 = require("mssql");
const ValidationSchema_2 = require("../ValidationSchema");
const JwtConfig = Convict_1.Config.get('Jwt');
const DataFetchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        const data = yield (yield database_1.pool.connect()).query('select * from users');
        const promise = new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, JwtConfig.accessSecret, (err, val) => {
                if (err) {
                    const response = res.response("invalid token").code(http_1.BAD_REQUEST);
                    resolve(response);
                }
                else {
                    if (data) {
                        const response = res.response(data.recordset).code(http_1.SUCCESS);
                        resolve(response);
                    }
                }
            });
        });
        return promise;
    }
    catch (err) {
        res.response({ err }).code(http_1.INTERNAL_SERVER_ERROR);
    }
});
exports.DataFetchController = DataFetchController;
const LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Data = req.payload;
        const server = yield database_1.pool.connect();
        const loginpromise = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const { error, value } = ValidationSchema_1.LoginSchema.validate(Data);
            if (error) {
                const response = res.response(error.details[0].message).code(http_1.BAD_REQUEST);
                resolve(response);
            }
            else {
                const emailcheck = yield server.request()
                    .input('email', value.email)
                    .execute('email_Check');
                if (emailcheck.recordset[0]) {
                    const pass = yield bcryptjs_1.default.compare(value.password, emailcheck.recordset[0].password);
                    if (pass) {
                        const token = yield (0, JwtHelpers_1.signAccessToken)(emailcheck.recordset[0].id);
                        const refresh = yield (0, JwtHelpers_1.refreshToken)(emailcheck.recordset[0].id);
                        const data = emailcheck.recordset[0];
                        if (token) {
                            Redis_1.client.set('currUser', JSON.stringify(data));
                        }
                        const response = res.response({
                            token,
                            refresh,
                            message: "User Logged In Successfully",
                            data
                        }).code(http_1.SUCCESS);
                        resolve(response);
                    }
                    else {
                        const response = res.response('Incorrect Password').code(http_1.BAD_REQUEST);
                        resolve(response);
                    }
                }
                else {
                    const response = res.response('User Not Found. Please Do Register..').code(http_1.BAD_REQUEST);
                    resolve(response);
                }
            }
        }));
        return loginpromise;
    }
    catch (err) {
        res.response({ err }).code(http_1.INTERNAL_SERVER_ERROR);
    }
});
exports.LoginController = LoginController;
const RegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Data = req.payload;
        const server = yield database_1.pool.connect();
        const registerPromise = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            const { error, value } = ValidationSchema_2.RegisterSchema.validate(Data);
            if (error) {
                const response = res.response(error.details[0].message).code(http_1.BAD_REQUEST);
                resolve(response);
            }
            else {
                const hashedPassword = yield bcryptjs_1.default.hash(value.password, 10);
                const user = yield server.request()
                    .input('firstname', (0, mssql_1.VarChar)(30), value.firstname)
                    .input('lastname', (0, mssql_1.VarChar)(30), value.lastname)
                    .input('email', (0, mssql_1.VarChar)(30), value.email)
                    .input('mobile', value.mobile)
                    .input('password', hashedPassword)
                    .output('response', (0, mssql_1.VarChar)(500))
                    .execute('userData');
                if (user.output.response === "fail") {
                    const response = res.response('User Already exist').code(http_1.BAD_REQUEST);
                    resolve(response);
                }
                else {
                    const token = yield (0, JwtHelpers_1.signAccessToken)(user.recordset[0].id);
                    const refresh = yield (0, JwtHelpers_1.refreshToken)(user.recordset[0].id);
                    if (token) {
                        Redis_1.client.set('currUser', JSON.stringify(user));
                    }
                    const userData = user.recordset[0];
                    const response = res.response({
                        token,
                        refresh,
                        message: "user added successfully",
                        userData
                    }).code(http_1.SUCCESS);
                    resolve(response);
                }
            }
        }));
        return registerPromise;
    }
    catch (err) {
        res.response({ err }).code(http_1.INTERNAL_SERVER_ERROR);
    }
});
exports.RegisterController = RegisterController;
const RefreshController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Token = req.payload;
        const promise = yield new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            if (!Token) {
                const response = res.response('Token is Required').code(http_1.BAD_REQUEST);
                resolve(response);
            }
            const userId = yield (0, JwtHelpers_1.verifyRefreshToken)(Token.refreshToken);
            const access_Token = yield (0, JwtHelpers_1.signAccessToken)(userId);
            const refresh_Token = yield (0, JwtHelpers_1.refreshToken)(userId);
            const tokens = res.response({
                access_Token,
                refresh_Token,
                message: 'Refreshed Successfully'
            }).code(http_1.SUCCESS);
            resolve(tokens);
        }));
        return promise;
    }
    catch (err) {
        res.response({ err }).code(http_1.INTERNAL_SERVER_ERROR);
    }
});
exports.RefreshController = RefreshController;
