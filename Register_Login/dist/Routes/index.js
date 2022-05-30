"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const UserController_1 = require("../Controllers/UserController");
exports.Routes = [{
        method: 'GET',
        path: '/',
        handler: UserController_1.Users.GetUser
    }, {
        method: 'POST',
        path: '/register',
        handler: UserController_1.Users.Register
    },
    {
        method: 'POST',
        path: '/login',
        handler: UserController_1.Users.Login
    }, {
        method: 'POST',
        path: '/refresh-token',
        handler: UserController_1.Users.Refresh
    }];
