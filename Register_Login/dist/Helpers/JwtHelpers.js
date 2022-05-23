"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.refreshToken = exports.signAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Convict_1 = require("../Config/Convict");
const signAccessToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            name: userId
        };
        const options = {
            expiresIn: '10m'
        };
        jsonwebtoken_1.default.sign(payload, Convict_1.newconfig._instance.Jwt.accessSecret, options, (err, val) => {
            if (err)
                reject(err);
            resolve(val);
        });
    });
};
exports.signAccessToken = signAccessToken;
const refreshToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            name: userId
        };
        const options = {
            expiresIn: '1y'
        };
        jsonwebtoken_1.default.sign(payload, Convict_1.newconfig._instance.Jwt.refreshSecret, options, (err, val) => {
            if (err)
                reject(err);
            resolve(val);
        });
    });
};
exports.refreshToken = refreshToken;
const verifyRefreshToken = (refreshToken) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(refreshToken, Convict_1.newconfig._instance.Jwt.refreshSecret, (err, val) => {
            if (err)
                return resolve('err' + err);
            const userId = val;
            resolve(userId.name);
        });
    });
};
exports.verifyRefreshToken = verifyRefreshToken;
