require('dotenv').config();

export const dbConfig = {
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	server: process.env.SERVER,
	database: process.env.DATABASE,
	port: process.env.dbPort,
	driver: process.env.dbDriver,
	options: {
		trustServerCertificate: true,
	},
};
