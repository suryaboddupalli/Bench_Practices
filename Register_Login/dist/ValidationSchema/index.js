"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    firstname: joi_1.default.string().min(3).required(),
    lastname: joi_1.default.string().min(3).required(),
    email: joi_1.default.string().email().required(),
    mobile: joi_1.default.number().min(10).max(10),
    password: joi_1.default.string().min(6).required(),
    conformPassword: joi_1.default.ref('password')
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
});
