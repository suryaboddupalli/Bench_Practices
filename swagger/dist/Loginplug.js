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
exports.register = void 0;
const JoiValidation_1 = require("./JoiValidation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (request, reply) => {
    const data = request.payload;
    JoiValidation_1.loginSchema.validateAsync(data)
        .then((value) => {
        console.log(value);
        const token = jsonwebtoken_1.default.sign(value.username, 'sceret');
        reply.response(token);
    })
        .catch(err => {
        console.log(err.details[0].message);
    });
};
const register = (server, option, next) => __awaiter(void 0, void 0, void 0, function* () {
    server.route({
        method: "POSt",
        path: "/login",
        handler: login
    });
    next();
});
exports.register = register;
exports.login.attributes = { name: 'login', version: '0.1.0' };
