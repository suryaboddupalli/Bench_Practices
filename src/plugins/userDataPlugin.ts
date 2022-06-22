import Hapi from '@hapi/hapi';
import { userControllers } from '../controllers/userControllers';
const controller = new userControllers();

export const userDataPlugin = {
	name: 'get-user',
	register: (server: Hapi.Server) => {
		server.route({
			method: 'Get',
			path: '/getData',
			handler: controller.getUser,
		});
	},
};
