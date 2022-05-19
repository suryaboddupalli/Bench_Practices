"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.client = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
const mssql_1 = __importStar(require("mssql"));
const Config_1 = require("./Config");
const Validation_1 = require("./Validation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = require('bcryptjs');
const redis = require('ioredis');
require('dotenv').config();
exports.client = new redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
exports.client.on('connect', () => {
    console.log("client connected to redis");
});
function redisJSONDemo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const TEST_KEY = 'test';
            yield exports.client.json.set(TEST_KEY, '.', { name: 'surya' });
            const value = yield exports.client.json.get(TEST_KEY, {
                path: '.name'
            });
            console.log(`value : ${value}`);
            yield exports.client.quit();
        }
        catch (e) {
            console.error(e);
        }
    });
}
redisJSONDemo();
const server = hapi_1.default.server({ port: process.env.HAPI_PORT, host: process.env.HAPI_HOST });
const pool = new mssql_1.default.ConnectionPool(Config_1.Config);
server.route([{
        method: 'GET',
        path: '/',
        handler: function data(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield (yield pool.connect()).query('select * from users');
                    const promise = new Promise((resolve, reject) => {
                        if (data) {
                            resolve(data);
                            res.response(data);
                            console.log(data);
                        }
                        else {
                            reject("error");
                        }
                    });
                    return promise;
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
    }, {
        method: 'post',
        path: '/register',
        handler: function (req, response) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = req.payload;
                    const password = data.password;
                    const hashedPassword = yield bcrypt.hash(password, 10);
                    const server = yield pool.connect();
                    const emailcheck = yield server.request()
                        .input('email', (0, mssql_1.VarChar)(30), data.email)
                        .execute('email_Check');
                    if (emailcheck.recordset[0]) {
                        const promise = new Promise((resolve, reject) => {
                            resolve("user already exist");
                        });
                        return promise;
                    }
                    else {
                        console.log("new user");
                        const promise = new Promise((resolve, reject) => {
                            if (data) {
                                Validation_1.registerSchema.validateAsync(data)
                                    .then(res => {
                                    const add = server.request()
                                        .input('firstname', (0, mssql_1.VarChar)(30), res.firstname)
                                        .input('lastname', (0, mssql_1.VarChar)(30), res.lastname)
                                        .input('email', (0, mssql_1.VarChar)(30), res.email)
                                        .input('mobile', res.mobile)
                                        .input('password', hashedPassword)
                                        .execute('register')
                                        .then((res) => console.log(res));
                                    resolve('User Added');
                                    const user = {
                                        firstname: res.firstname,
                                        lastname: res.lastname,
                                        email: res.email,
                                        mobile: res.mobile,
                                    };
                                    console.log(user);
                                    const token = jsonwebtoken_1.default.sign(res.email, 'secert');
                                    console.log(token);
                                    exports.client.json.set('newuser', '.', user);
                                }).catch(err => {
                                    console.log(err.details);
                                });
                            }
                            else {
                                reject("error");
                            }
                        });
                        return promise;
                    }
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
    }]);
server.start()
    .then((res) => {
    console.log("Connected");
})
    .catch((err) => {
    console.log(err);
});
