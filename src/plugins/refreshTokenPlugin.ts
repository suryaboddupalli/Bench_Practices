import Hapi from '@hapi/hapi';
import { userControllers } from '../controllers/userControllers';
const controller = new userControllers();

export const refreshTokenPlugin = {
	name: 'refresh-token',
	register: (server: Hapi.Server) => {
		server.route({
			method: 'POST',
			path: '/refresh-token',
			handler: controller.refreshRequest,
		});
	},
};
