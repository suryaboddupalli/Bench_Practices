"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const UserControllers_1 = require("../Controllers/UserControllers");
const DataFetchController_1 = require("../Controllers/DataFetchController");
exports.Routes = [{
        method: 'GET',
        path: '/',
        handler: DataFetchController_1.DataFetchController
    }, {
        method: 'POST',
        path: '/register',
        handler: UserControllers_1.RegisterController
    },
    {
        method: 'POST',
        path: '/login',
        handler: UserControllers_1.LoginController
    }, {
        method: 'POST',
        path: '/refresh-token',
        handler: UserControllers_1.RefreshController
    }];
