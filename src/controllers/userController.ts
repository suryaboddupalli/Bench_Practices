import { ResponseToolkit, Request } from '@hapi/hapi';
import { dbServer } from '../database/server';
import {
	INTERNAL_SERVER_ERROR_MESSAGE,
	USER_ADDED_SUCCESS,
	USER_DELETED_SUCCESS,
	USER_UPDATED_SUCCESS,
} from '../constants/index';
import {
	IAddUserData,
	IDeleteUserData,
	IUpdateUserData,
} from '../interfaces/userInterface';

import { SUCCESS, INTERNAL_SERVER_ERROR } from '../constants/httpConstant';

export class userController {
	async getUsersData(req: Request, res: ResponseToolkit) {
		try {
			const pool: any = await dbServer;
			console.log(pool);
			const userData = await pool.query('exec getUsers');
			return res.response(userData.recordset).code(SUCCESS);
		} catch {
			return res
				.response(INTERNAL_SERVER_ERROR_MESSAGE)
				.code(INTERNAL_SERVER_ERROR);
		}
	}
	async postUsersData(req: IAddUserData, res: ResponseToolkit) {
		try {
			const { id, name, age } = req.payload;
			const pool: any = await dbServer;
			console.log(id, name, age);
			await pool.query(
				'exec addUser @id="' +
					id +
					'",@name="' +
					name +
					'", @age="' +
					age +
					'"'
			);
			return res.response(USER_ADDED_SUCCESS).code(SUCCESS);
		} catch {
			return res
				.response(INTERNAL_SERVER_ERROR_MESSAGE)
				.code(INTERNAL_SERVER_ERROR);
		}
	}
	async updateUsersData(req: IUpdateUserData, res: ResponseToolkit) {
		try {
			const pool: any = await dbServer;
			const { name, age } = req.payload;
			const { id } = req.params;
			await pool.query(
				'exec updateUser @id="' +
					id +
					'",@name="' +
					name +
					'", @age="' +
					age +
					'"'
			);
			return res.response(USER_UPDATED_SUCCESS).code(SUCCESS);
		} catch {
			return res
				.response(INTERNAL_SERVER_ERROR_MESSAGE)
				.code(INTERNAL_SERVER_ERROR);
		}
	}
	async deleteUsersData(req: IDeleteUserData, res: ResponseToolkit) {
		try {
			const pool: any = await dbServer;
			await pool.query('exec deleteUser @id="' + req.params.id + '"');
			return res.response(USER_DELETED_SUCCESS).code(SUCCESS);
		} catch {
			return res
				.response(INTERNAL_SERVER_ERROR_MESSAGE)
				.code(INTERNAL_SERVER_ERROR);
		}
	}
}
