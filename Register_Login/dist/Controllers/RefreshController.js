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
exports.refreshController = void 0;
const JwtHelpers_1 = require("../Helpers/JwtHelpers");
const refreshController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Token = req.payload;
        const promise = yield new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            if (!Token)
                return resolve('Token is not Valid');
            const userId = yield (0, JwtHelpers_1.verifyRefreshToken)(Token.refreshToken);
            const access_Token = yield (0, JwtHelpers_1.signAccessToken)(userId);
            const refresh_Token = yield (0, JwtHelpers_1.refreshToken)(userId);
            console.log(access_Token + ' ' + refresh_Token);
            const tokens = res.response({ access_Token, refresh_Token, message: 'Refreshed Successfully' });
            resolve(tokens);
        }));
        return promise;
    }
    catch (err) {
        console.log(err);
    }
});
exports.refreshController = refreshController;
