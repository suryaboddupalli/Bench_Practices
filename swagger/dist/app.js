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
const hapi_1 = __importDefault(require("@hapi/hapi"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
const inert_1 = __importDefault(require("@hapi/inert"));
const vision_1 = __importDefault(require("@hapi/vision"));
const JoiValidation_1 = require("./JoiValidation");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new hapi_1.default.Server({ port: 9000, host: "localhost" });
        const swaggerOptions = {
            info: {
                title: 'Test API Documentation'
            }
        };
        const plugins = [
            {
                plugin: inert_1.default
            },
            {
                plugin: vision_1.default
            },
            {
                plugin: hapi_swagger_1.default,
                options: swaggerOptions
            }
        ];
        server.register(plugins);
        server.route([{
                method: "get",
                path: '/',
                handler: (request, reply) => __awaiter(this, void 0, void 0, function* () {
                    yield reply.response('hello surya');
                })
            }, {
                method: 'post',
                path: '/',
                handler: (request, reply) => __awaiter(this, void 0, void 0, function* () {
                    const data = request.payload;
                    yield JoiValidation_1.userData.validateAsync(data).then(val => {
                        console.log(val);
                        reply.response(val);
                    }).catch(err => {
                        throw new Error('Failed to validate input ' + err.details[0].message);
                    });
                })
            },
            {
                method: "GET",
                path: "/get/{username}",
                handler: (request, reply) => __awaiter(this, void 0, void 0, function* () {
                    const username = yield request.params.username;
                    reply.response(`hello ${username}`);
                })
            },
        ]);
        server.start()
            .then(() => console.log('connected' + process.env.PORT))
            .catch(err => {
            console.log(err);
        });
    });
}
startServer();
