import Joi from 'joi';

export const registerSchema = Joi.object({
	firstname: Joi.string().min(3).required(),
	lastname: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	conformPassword: Joi.ref('password'),
});

export const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});
