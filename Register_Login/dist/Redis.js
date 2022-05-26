"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const redis = require('ioredis');
const Convict_1 = require("./Config/Convict");
exports.client = new redis(Convict_1.newconfig._instance.Redis.port, Convict_1.newconfig._instance.Redis.host);
exports.client.on('connect', function () {
    console.log("redis server connected");
});
