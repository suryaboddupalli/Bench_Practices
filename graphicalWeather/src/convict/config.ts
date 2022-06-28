import convict from 'convict';

export const config = convict({
	hapi: {
		port: {
			doc: 'Hapi Port',
			format: Number,
			default: 4000,
		},
		host: {
			doc: 'Hapi Host',
			format: String,
			default: 'localhost',
		},
	},
	url: {
		doc: 'End_Point Url',
		format: String,
		default: 'https://localhost:9001/xml/SOAP_server/ndfdXMLserver.php',
	},
});

config.loadFile(`./src/convict/local.json`);

config.validate({ allowed: 'strict' });
