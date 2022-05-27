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
exports.postData = exports.GetData = void 0;
const data = {
    name: "surya",
    age: 20,
};
const GetData = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const promise = new Promise((resolve, reject) => {
                if (data) {
                    resolve(data);
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
};
exports.GetData = GetData;
const postData = (req, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Data = req.payload;
        const promise = new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            if (Data) {
                resolve(data);
            }
        }));
        return promise;
    }
    catch (err) {
        console.log(err);
    }
});
exports.postData = postData;
