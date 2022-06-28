import {
	registerSchema,
	loginSchema,
} from '../validationSchema/userValidationSchema';
import { userControllers } from '../controllers/userControllers';
import { joiErrors } from '../validationSchema/joiErrors';
const controller = new userControllers();

export const routes = [
	{
		method: 'POST',
		path: '/register',
		handler: controller.register,
		options: {
			validate: {
				payload: registerSchema,
				failAction: joiErrors,
			},
		},
	},
	{
		method: 'POST',
		path: '/login',
		handler: controller.login,
		options: {
			validate: {
				payload: loginSchema,
				failAction: joiErrors,
			},
		},
	},
];
