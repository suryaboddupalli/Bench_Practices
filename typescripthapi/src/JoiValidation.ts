import Joi = require("joi");

export const userData =Joi.object({
    name:Joi.string().min(3).required(),
    username:Joi.string().min(3).required(),
    password:Joi.string().min(6).required()
})

export const loginSchema =Joi.object({
    username:Joi.string().min(3).required(),
    password:Joi.string().min(6).required()
})

