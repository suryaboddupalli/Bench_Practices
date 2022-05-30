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
const database_1 = require("../../database");
const ValidationSchema_1 = require("../../ValidationSchema");
const JwtHelpers_1 = require("../../Helpers/JwtHelpers");
const Redis_1 = require("../../Redis");
const http_1 = require("../../Constants/http");
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
                const emailcheck = yield server.query("exec email_Check  @email='" + value.email + "'");
                if (emailcheck.recordset[0]) {
                    const pass = yield bcryptjs_1.default.compare(value.password, emailcheck.recordset[0].password);
                    if (pass) {
                        const Access_Token = yield (0, JwtHelpers_1.signAccessToken)(emailcheck.recordset[0].id);
                        const Refresh_Token = yield (0, JwtHelpers_1.refreshToken)(emailcheck.recordset[0].id);
                        const data = emailcheck.recordset[0];
                        if (Access_Token) {
                            Redis_1.client.set('currUser', JSON.stringify(data));
                        }
                        const response = res.response({
                            Access_Token,
                            Refresh_Token,
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
