import Hapi from "@hapi/hapi";
import { routes } from "./routes/index";
import { config } from "./convict/config";

export const server: Hapi.Server = Hapi.server(config.get("hapi"));

const init = async () => {
	await server
		.start()
		.then((res: any) => {
			console.log("connected");
		})
		.catch((err: any) => {
			console.log(err);
		});

	server.route(routes);
};
init();
