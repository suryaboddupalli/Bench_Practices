import { graphicalWeatherController } from '../controller/graphicalWeatherController';
import { zipcodeSchema, cityNamesSchema } from '../validation/index';
const controller = new graphicalWeatherController();

export const routes = [
	{
		method: 'POST',
		path: '/zipcode',
		handler: controller.getZipcodeData,
		options: {
			validate: {
				payload: zipcodeSchema,
			},
		},
	},
	{
		method: 'POST',
		path: '/city',
		handler: controller.getCityNames,
		options: {
			validate: {
				payload: cityNamesSchema,
			},
		},
	},
];
