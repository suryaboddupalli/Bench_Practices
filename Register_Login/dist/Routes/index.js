"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const LoginController_1 = require("../Controllers/UserControllers/LoginController");
const RegisterController_1 = require("../Controllers/UserControllers/RegisterController");
const RefreshController_1 = require("../Controllers/UserControllers/RefreshController");
const UserDataController_1 = require("../Controllers/UserControllers/UserDataController");
exports.Routes = [{
        method: 'GET',
        path: '/',
        handler: UserDataController_1.UserDataController
    }, {
        method: 'POST',
        path: '/register',
        handler: RegisterController_1.RegisterController
    },
    {
        method: 'POST',
        path: '/login',
        handler: LoginController_1.LoginController
    }, {
        method: 'POST',
        path: '/refresh-token',
        handler: RefreshController_1.RefreshController
    }];
