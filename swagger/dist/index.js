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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = __importStar(require("@hapi/hapi"));
const JoiValidation_1 = require("./JoiValidation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const server = new hapi.Server({ port: 3000, host: 'localhost' });
server.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => {
        reply.response("Hello World");
    }
});
server.route([{
        method: "GET",
        path: "/",
        handler: (request, reply) => {
            reply.response("Hello World");
        }
    },
    {
        method: "post",
        path: "/post",
        handler: (request, reply) => {
            const data = request.payload;
            JoiValidation_1.userData.validateAsync(data).then(val => {
                console.log(val);
                reply.response(val);
            }).catch(err => {
                throw new Error('Failed to validate input ' + err.details[0].message);
            });
        }
    },
    {
        method: "GET",
        path: "/get/{username}",
        handler: (request, reply) => {
            const username = request.params.username;
            reply.response(`hello ${username}`);
        }
    }, {
        method: "Get",
        path: "/get/{id?}",
        handler: (request, reply) => {
            const data = request.params.id;
            if (request.params.id) {
                return reply.response(`userID : ${data}`);
            }
            else {
                return reply.response('userId');
            }
        }
    },
    {
        method: "POSt",
        path: "/login",
        handler: (request, reply) => {
            const data = request.payload;
            JoiValidation_1.loginSchema.validateAsync(data)
                .then((value) => {
                console.log(value);
                const token = jsonwebtoken_1.default.sign(value.username, 'sceret');
                reply.response(token);
            })
                .catch(err => {
                console.log(err.details[0].message);
            });
        }
    }
]);
server.start()
    .then(() => console.log("sever connected"));
