import Hapi from '@hapi/hapi';
import { userRoutes } from './routes/userRoutes';
require('dotenv').config();

const server = Hapi.server({
	port: process.env.hapiPort,
	host: process.env.hapiHost,
});

const init = async () => {
	server.route(userRoutes);
	await server.start().then(() => {
		console.log('Hapi server Connected');
	});
};
init();
