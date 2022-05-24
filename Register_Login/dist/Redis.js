"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const redis = require('ioredis');
exports.client = new redis(2001, 'localhost');
exports.client.on('connect', function () {
    console.log("redis server connected");
});
