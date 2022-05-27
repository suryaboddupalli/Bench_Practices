"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
const index_1 = require("./Routes/index");
const Convict_1 = require("./Config/Convict");
const HapiConfig = Convict_1.Config.get('Hapi');
exports.server = hapi_1.default.server(HapiConfig);
exports.server.start()
    .then((res) => {
    console.log("connected");
}).catch(err => {
    console.log(err);
});
exports.server.route(index_1.Routes);
