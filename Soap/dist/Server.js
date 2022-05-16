"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const Redis = require("ioredis");
const soap = require('soap');
require('dotenv').config();
const fs = require('fs');
const cluster = new Redis.Cluster([
    {
        port: 6380,
        host: "127.0.0.1",
    },
    {
        port: 6381,
        host: "127.0.0.1",
    },
]);
console.log(cluster.nodes());
// cluster.set("foo", "bar");
// cluster.get("foo", (err:any, res:any) => {
//     console.log(res)
// });
const config = { port: process.env.port, host: process.env.host };
const server = hapi_1.default.server(config);
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
// soap.createClient(url, function (err: any, client: any) {
//     client.firstSoap('naveen', function (err: any, res: any) {
//         console.log(res)
//     })
// });
// soap.createClientAsync(url).then((client:any) => {
//     return client.MyFunctionAsync(args);
//   }).then((result:any) => {
//     console.log(result);
//   });
var myService = {
    MyService: {
        MyPort: {
            MyFunction: ((args) => {
                return {
                    name: args
                };
            })
        }
    }
};
// var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    // await soap.listen(server, '/wsdl', myService, xml, function () {
    //     console.log('server initialized');
    // });
});
init();
