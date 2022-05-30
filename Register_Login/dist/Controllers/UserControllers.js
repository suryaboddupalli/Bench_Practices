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
const JwtHelpers_1 = require("../Helpers/JwtHelpers");
const JwtConfig = Convict_1.Config.get('Jwt');
const DataFetchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        const data = yield (yield database_1.pool.connect()).request().execute('getData');
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
                yield server.query("exec email_Check  @email='" + value.email + "'", (err, recordset) => __awaiter(void 0, void 0, void 0, function* () {
                    if (err) {
                        console.log(err.message);
                    }
                    console.log(recordset);
                    console.log(recordset[0]);
                    // if (recordset[0]) {
                    //     const passwordVerify = await bcrypt.compare(value.password, recordset[0].password)
                    //     if (passwordVerify) {
                    //         const accessToken = await signAccessToken(recordset[0].id)
                    //         const refresh = await refreshToken(recordset[0].id)
                    //         const data = recordset[0]
                    //         if (accessToken) {
                    //             client.set('currUser', JSON.stringify(data))
                    //         }
                    //         const response = res.response({
                    //             accessToken,
                    //             refresh,
                    //             message: "User Logged In Successfully",
                    //             data
                    //         }).code(SUCCESS)
                    //         resolve(response)
                    //     }
                    //     else {
                    //         const response = res.response('Incorrect Password').code(BAD_REQUEST)
                    //         resolve(response)
                    //     }
                    // }
                    // else {
                    //     const response = res.response('User Not Found. Please Do Register..').code(BAD_REQUEST)
                    //     resolve(response)
                    // }
                }));
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
            const { error, value } = ValidationSchema_1.RegisterSchema.validate(Data);
            if (error) {
                resolve(error.details[0].message);
            }
            else {
                yield server.query("exec email_Check  @email='" + value.email + "'", (err, recordset) => __awaiter(void 0, void 0, void 0, function* () {
                    if (err) {
                        console.log(err.message);
                    }
                    console.log(recordset[0]);
                    console.log(recordset);
                    // if (recordset[0]) {
                    //     resolve('User Already exist')
                    // }
                    // else {
                    //     const hashedPassword = await bcrypt.hash(value.password, 10)
                    //     const Data = await server.request()
                    //         .input('firstname', VarChar(100), value.firstname)
                    //         .input('lastname', VarChar(100), value.lastname)
                    //         .input('email', VarChar(100), value.email)
                    //         .input('mobile', value.mobile)
                    //         .input('password', hashedPassword)
                    //         .execute('register')
                    //     if (Data.recordset) {
                    //         const token = await signAccessToken(Data.recordset[0].id)
                    //         const refresh = await refreshToken(Data.recordset[0].id)
                    //         const data = Data.recordset[0]
                    //         if (token) {
                    //             client.set('currUser', JSON.stringify(data))
                    //         }
                    //         const response = res.response({
                    //             token,
                    //             refresh,
                    //             message: "user added successfully",
                    //             data
                    //         })
                    //         resolve(response)
                    //     }
                }));
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
