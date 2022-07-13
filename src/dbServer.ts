import pg from 'pg';

const options = {
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'Admin@12345',
	port: 5432,
};

export const pool = new pg.Pool(options);

pool.connect().then(() => {
	console.log('connected');
});
