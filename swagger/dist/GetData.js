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
const hapi_1 = __importDefault(require("hapi"));
const mssql_1 = __importDefault(require("mssql"));
const config = {
    database: 'students',
    server: 'localhost',
    drivers: 'msnodesqlv8',
    encrypt: true,
    options: {
        trustedConnection: true
    }
};
const conn = mssql_1.default.connect(config);
const GetStudents = (request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (yield conn).request()
            .input('id', mssql_1.default.Int, 100)
            .query('select * from student where id=@id');
        console.log(data);
        res.response(data);
        (yield conn).close();
    }
    catch (err) {
        console.log(err);
        res.response("err");
        (yield conn).close();
    }
});
const server = new hapi_1.default.Server({ port: 8000, host: 'localhost' });
server.route({
    method: 'GET',
    path: '/',
    handler: GetStudents
});
server.start()
    .then(() => console.log('connected'))
    .catch(err => {
    console.log(err);
});
