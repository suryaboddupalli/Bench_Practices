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
exports.log = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
const Config_1 = __importDefault(require("./Config"));
const bunyan_1 = __importDefault(require("bunyan"));
const AuthController_1 = require("./Controllers/AuthController");
const dotenv_1 = __importDefault(require("dotenv"));
const mssql_1 = __importDefault(require("mssql"));
dotenv_1.default.config();
const conn = mssql_1.default.connect(Config_1.default);
exports.log = bunyan_1.default.createLogger({ name: 'FirstTest' });
const server = new hapi_1.default.Server({ port: process.env.PORT, host: process.env.host });
server.route([{
        method: 'POST',
        path: '/register',
        handler: AuthController_1.register
    },
    {
        method: 'POST',
        path: '/login',
        handler: AuthController_1.login
    }, {
        method: 'get',
        path: '/get',
        handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const data = (yield conn).request()
                    .query('select * from newstudents');
                console.log(data);
                res.response(data);
                (yield conn).close();
            }
            catch (err) {
                console.log(err);
                (yield conn).close();
            }
        })
    }
]);
server.start()
    .then(() => console.log('connected' + process.env.PORT))
    .catch(err => {
    console.log(err);
});
exports.log.info("2st Stage");
