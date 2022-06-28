import Hapi from '@hapi/hapi';
import { routes } from './routes/userRoutes';
import { config } from './convict/config';
import { refreshTokenPlugin } from './plugins/refreshTokenPlugin';
import { userDataPlugin } from './plugins/userDataPlugin';

export const server: Hapi.Server = Hapi.server(config.get('hapi'));

const init = async () => {
	await server.register([refreshTokenPlugin, userDataPlugin]);
	await server
		.start()
		.then(() => {
			console.log('connected');
		})
		.catch((err) => {
			console.log(err);
		});

	server.route(routes);
};
init();
