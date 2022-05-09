"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.userData = void 0;
const Joi = require("joi");
exports.userData = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
});
exports.loginSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
});
