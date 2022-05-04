const Joi = require('joi')

const Schema =Joi.object({
    firstname :Joi.string().min(3).max(20).required(),
    lastname:Joi.string().min(1).max(20).required(),
    email:Joi.string().email().required(),
    password :Joi.string().min(8).max(30).required()
})

const loginSchema = Joi.object().keys({
    email:Joi.string().email().required(),
    password :Joi.string().min(8).max(30).required()
})

module.exports ={Schema,loginSchema}