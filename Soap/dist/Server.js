"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soap_1 = __importDefault(require("soap"));
var url = "http://www.dneonline.com/calculator.asmx?wsdl";
var args = { name: 'value' };
soap_1.default.createClientAsync(url).then((client) => {
    return client.MyFunctionAsync(args);
}).then((result) => {
    console.log(result);
});
// soap.createClient(url, function (err: any, client: any) {
//     client.MyFunction(args, function (err: any, result: any) {
//         console.log(result);
//     });
// });
