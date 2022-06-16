const convict = require("convict");

export const config = convict({
	env: {
		doc: "environment",
		format: ["production", "local", "test"],
		default: "local",
		env: "NODE_ENV",
	},
	hapi: {
		port: {
			doc: "Hapi Port",
			format: Number,
			default: 4000,
		},
		host: {
			doc: "Hapi Host",
			format: String,
			default: "localhost",
		},
	},
});

let env = config.get("env");

config.loadFile(`./src/convict/${env}.json`);

config.validate({ allowed: "strict" });
