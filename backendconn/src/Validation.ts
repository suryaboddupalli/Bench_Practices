import Joi from 'joi'

export const useraddSchema =Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    dob :Joi.date().required()
})