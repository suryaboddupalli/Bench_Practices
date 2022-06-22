import { registerSchema, loginSchema } from '../validationSchema/index';
import { userControllers } from '../controllers/userControllers';
const controller = new userControllers();

export const routes = [
	{
		method: 'POST',
		path: '/register',
		handler: controller.register,
		options: {
			validate: {
				payload: registerSchema,
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
			},
		},
	},
];
