"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const data = {
    name: 'surya',
    age: 20
};
axios_1.default.get('apilink')
    .then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
axios_1.default.get('apilink/${id}')
    .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
axios_1.default.post('apilink', data)
    .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
(0, axios_1.default)({
    method: 'post',
    url: 'apilink',
    data: data
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
axios_1.default.put('apilink/${id}', data)
    .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
axios_1.default.delete('apilink/${id}')
    .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
