import Hapi from "@hapi/hapi";
import { routes } from "./routes/index";
import { config } from "./convict/config";
import { refreshTokenPlugin } from "./plugins/refreshTokenPlugin";
import { userDataPlugin } from "./plugins/userDataPlugin";

const hapiConfig = config.get("hapi");

export const server: Hapi.Server = Hapi.server(hapiConfig);

const init = async () => {
    await server.register([refreshTokenPlugin, userDataPlugin]);

    await server
        .start()
        .then((res) => {
            console.log("connected");
        })
        .catch((err) => {
            console.log(err);
        });

    server.route(routes);
};
init();
