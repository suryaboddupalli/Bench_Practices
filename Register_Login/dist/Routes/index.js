"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterController_1 = require("../Controllers/RegisterController");
const DataFetchController_1 = require("../Controllers/DataFetchController");
const LoginController_1 = require("../Controllers/LoginController");
module.exports = [{
        method: 'GET',
        path: '/',
        handler: DataFetchController_1.DataFetchController
    }, {
        method: 'POST',
        path: '/register',
        handler: RegisterController_1.RegisterController
    },
    {
        method: 'POST',
        path: '/login',
        handler: LoginController_1.LoginController
    }];
