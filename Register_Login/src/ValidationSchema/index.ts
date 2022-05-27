import Joi from 'joi'

export const RegisterSchema = Joi.object({
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    mobile: Joi.number().min(10).max(10),
    password: Joi.string().min(6).required(),
    conformPassword: Joi.ref('password')
})

export const LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})