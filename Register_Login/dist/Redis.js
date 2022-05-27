"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const Convict_1 = require("./Config/Convict");
const RedisConfig = Convict_1.Config.get('Redis');
exports.client = new ioredis_1.default(RedisConfig.port, RedisConfig.host);
exports.client.on('connect', function () {
    console.log("redis server connected");
});
