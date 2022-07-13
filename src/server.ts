import Hapi from '@hapi/hapi';
import { userRoutes } from './routes/userRoutes';

const server = Hapi.server({
	port: 4000,
	host: 'localhost',
});

const init = async () => {
	server.route(userRoutes);
	await server.start().then(() => {
		console.log('Hapi server Connected');
	});
};
init();
