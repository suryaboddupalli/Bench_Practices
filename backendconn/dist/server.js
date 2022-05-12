"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mssql_1 = __importStar(require("mssql"));
const config_1 = require("./config");
const Validation_1 = require("./Validation");
const server = hapi_1.default.server({
    port: 3000,
    host: 'localhost'
});
const pool = new mssql_1.default.ConnectionPool(config_1.config);
pool.on("error", function (err) {
    if (err) {
        console.log(err.message);
    }
    console.log("connected");
});
server.route([{
        method: 'get',
        path: '/',
        handler: function data(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield (yield pool.connect()).query('select * from person');
                    const promise = new Promise((resolve, reject) => {
                        if (data) {
                            resolve(data);
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
        }
    },
    {
        method: 'post',
        path: '/add',
        handler: function data(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const person = req.payload;
                    yield Validation_1.useraddSchema.validateAsync(person)
                        .then((res) => {
                        console.log(res);
                        const name = res.name;
                        const email = res.email;
                        const dob = res.dob;
                        const add = pool.request()
                            .input('name', (0, mssql_1.VarChar)(30), name)
                            .input('email', (0, mssql_1.VarChar)(30), email)
                            .input('dataofbirth', dob)
                            .execute('addperson');
                        console.log(add);
                    }).catch((err) => {
                        console.log(err);
                    });
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
    }
]);
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    console.log(`Server running at: ${server.info.uri}`);
});
init();
