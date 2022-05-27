"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
module.exports = [{
        method: "Get",
        path: '/',
        handler: Controller_1.GetData,
        options: {
            description: "Get Data",
            notes: "Data Recivied",
            tags: ['Api']
        }
    },
    {
        method: "post",
        path: '/add',
        handler: Controller_1.postData,
        options: {
            description: "Get Data",
            notes: "Data Recivied",
            tags: ['Api']
        }
    }];
