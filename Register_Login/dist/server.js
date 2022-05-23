"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.Redis = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
require('dotenv').config();
const redis = require('ioredis');
const Routes = require('./Routes');
const Convict_1 = require("./Config/Convict");
exports.Redis = new redis(Convict_1.newconfig._instance.Redis.port, Convict_1.newconfig._instance.Redis.port);
exports.Redis.on('connect', function () {
    console.log("redis server connected");
});
exports.server = hapi_1.default.server({ port: Convict_1.newconfig._instance.Hapi.port, host: Convict_1.newconfig._instance.Hapi.host });
exports.server.start()
    .then((res) => {
    console.log("connected");
}).catch(err => {
    console.log(err);
});
exports.server.route(Routes);
