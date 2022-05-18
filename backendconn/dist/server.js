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
const server = hapi_1.default.server({
    port: 3000,
    host: 'localhost'
});
const pool = new mssql_1.default.ConnectionPool(config_1.Config);
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
                    const server = yield pool.connect();
                    // await useraddSchema.validateAsync(person).catch(err=>console.log('Validate'+err))
                    const add = yield server.request()
                        .input('name', (0, mssql_1.VarChar)(30), person.name)
                        .input('email', (0, mssql_1.VarChar)(30), person.email)
                        .input('dataofbirth', person.dob)
                        .execute('addperson');
                    const promise = new Promise((resolve, reject) => {
                        if (add) {
                            resolve("added successfull");
                            console.log(add);
                        }
                        else {
                            reject({ error: "error" });
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
        method: 'put',
        path: '/edit/{id}',
        handler: function data(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const id = req.params;
                    console.log(req.params);
                    const person = req.payload;
                    const server = yield pool.connect();
                    const edit = yield server.request()
                        .input('id', parseInt(id))
                        .input('name', (0, mssql_1.VarChar)(30), person.name)
                        .input('email', (0, mssql_1.VarChar)(30), person.email)
                        .input('dataofbirth', person.dob)
                        .execute('editperson');
                    const promise = new Promise((resolve, reject) => {
                        if (edit) {
                            resolve("edited successfull");
                            console.log(edit);
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
    }, {
        method: 'delete',
        path: '/delete/{id}',
        handler: function data(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const id = req.params;
                    console.log(id.id);
                    const server = yield pool.connect();
                    const deleteData = yield server.request()
                        .input('id', id.id)
                        .execute('deleteperson');
                    const promise = new Promise((resolve, reject) => {
                        if (deleteData) {
                            resolve("Deleted successfull");
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
    }
]);
server.start()
    .then((res) => console.log("hapi connected"))
    .catch((err) => {
    console.log(err);
});
