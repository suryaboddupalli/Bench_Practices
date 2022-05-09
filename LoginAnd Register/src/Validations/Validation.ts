import Joi from 'joi';

export const userRegisterSchema =Joi.object({
    firstname:Joi.string().min(3).required(),
    lastname:Joi.string().min(1).required(),
    email:Joi.string().email().required(),
    phone:Joi.number().min(10),
    password:Joi.string().min(6).required()
})

export const loginDataSchema =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required()
})