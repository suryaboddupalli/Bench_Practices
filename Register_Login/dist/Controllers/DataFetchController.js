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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFetchController = void 0;
const database_1 = require("../database");
const DataFetchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (yield database_1.pool.connect()).query('select * from users');
        const promise = new Promise((resolve, reject) => {
            if (data) {
                resolve(data);
                res.response(data);
                console.log(data);
            }
            else {
                reject("error");
            }
        });
        return promise;
    }
    catch (err) {
        console.log(err);
    }
});
exports.DataFetchController = DataFetchController;
