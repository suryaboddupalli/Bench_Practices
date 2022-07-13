import mssql from 'mssql';
import { dbConfig } from '../config/dbConfig';

export const dbServer = new mssql.ConnectionPool(dbConfig as any)
	.connect()
	.then((res) => {
		console.log('db Connected');
		return res;
	})
	.catch((err) => console.log(err));
