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
exports.UserData = void 0;
const database_1 = require("../../database");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Convict_1 = require("../../Config/Convict");
const http_1 = require("../../Constants/http");
const JwtConfig = Convict_1.Config.get('Jwt');
// export const UserDataController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
//     try {
// const authHeader = req.headers['authorization']
// const bearerToken = authHeader.split(' ')
// const token = bearerToken[1]
// const data = await (await pool.connect()).query('exec getData')
//         const promise: any = new Promise((resolve, reject) => {
// jwt.verify(token, JwtConfig.accessSecret, (err: any, val: any) => {
//     if (err) {
//         const response = res.response("invalid token").code(BAD_REQUEST)
//         resolve(response)
//     }
//     else {
//         if (data) {
//             const response = res.response(data.recordset).code(SUCCESS)
//             resolve(response)
//         }
//     }
// })
//         });
//         return promise
//     }
//     catch (err) {
//         res.response({ err }).code(INTERNAL_SERVER_ERROR)
//     }
// }
class UserDataController {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authHeader = req.headers['authorization'];
                const bearerToken = authHeader.split(' ');
                const token = bearerToken[1];
                const data = yield (yield database_1.pool.connect()).query('exec getData');
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
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UserData = new UserDataController();
