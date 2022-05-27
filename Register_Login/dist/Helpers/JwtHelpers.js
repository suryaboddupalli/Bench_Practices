"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.refreshToken = exports.signAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Convict_1 = require("../Config/Convict");
const JwtConfig = Convict_1.Config.get('Jwt');
const signAccessToken = (userId) => {
    const payload = {
        name: userId
    };
    const options = {
        expiresIn: '10m'
    };
    const token = jsonwebtoken_1.default.sign(payload, JwtConfig.accessSecret, options);
    return token;
};
exports.signAccessToken = signAccessToken;
const refreshToken = (userId) => {
    const payload = {
        name: userId
    };
    const options = {
        expiresIn: '1y'
    };
    const token = jsonwebtoken_1.default.sign(payload, JwtConfig.refreshSecret, options);
    return token;
};
exports.refreshToken = refreshToken;
const verifyRefreshToken = (refreshToken) => {
    const token = jsonwebtoken_1.default.verify(refreshToken, JwtConfig.refreshSecret);
    return token;
};
exports.verifyRefreshToken = verifyRefreshToken;
