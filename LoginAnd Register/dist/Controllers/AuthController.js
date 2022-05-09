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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const Validation_1 = require("../Validations/Validation");
const app_1 = require("../app");
// const conn = sql.connect(config)
const register = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registerData = yield request.payload;
        yield Validation_1.userRegisterSchema.validateAsync(registerData)
            .then((res) => console.log(res));
        console.log(registerData);
        app_1.log.info('register');
        return yield response.response("completed");
        // await userRegisterSchema.validateAsync(registerData)
        //     .then((res) => {
        //         console.log(res)
        //         response.response(res)
        //         log.info('register')
        //         return null
        //     }).catch(err => {
        //         console.log(err.details[0])
        //         log.warn('error')
        //     })
    }
    catch (err) {
        console.log(err);
    }
});
exports.register = register;
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = request.payload;
        yield Validation_1.loginDataSchema.validateAsync(loginData)
            .then((res) => {
            console.log(res);
            response.response(res);
            return app_1.log.info('login');
        }).catch(err => {
            console.log(err.details[0]);
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.login = login;
