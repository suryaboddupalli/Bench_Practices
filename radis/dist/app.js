"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
exports.client = new ioredis_1.default(6379, 'localhost');
const redisclient = ioredis_1.default.createClient();
exports.client.on('connect', () => {
    console.log("client connected to redis");
});
exports.client.on('ready', () => {
    console.log("client connected to redis and ready to use");
});
exports.client.on('error', (err) => {
    console.log("error" + err);
});
exports.client.on('end', () => {
    console.log("client is disconnected");
});
