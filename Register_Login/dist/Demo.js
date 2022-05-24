"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const Redis_1 = require("./Redis");
const add = (data) => {
    try {
        Redis_1.client.set('name', JSON.stringify(data));
    }
    catch (err) {
        console.log(err);
    }
};
exports.add = add;
