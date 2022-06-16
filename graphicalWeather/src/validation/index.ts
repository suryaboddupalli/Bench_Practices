import Joi from "joi";

export const zipcodeSchema = Joi.object({
	zipCodeList: Joi.number().required(),
});

export const cityNamesSchema = Joi.object({
	displayLevel: Joi.number().required(),
});
