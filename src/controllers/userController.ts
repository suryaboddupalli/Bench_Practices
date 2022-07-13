import { ResponseToolkit, Request } from '@hapi/hapi';
import { pool } from '../dbServer';
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
			const userData = await pool.query('select * from users');
			return res.response(userData.rows).code(SUCCESS);
		} catch {
			return res
				.response(INTERNAL_SERVER_ERROR_MESSAGE)
				.code(INTERNAL_SERVER_ERROR);
		}
	}

	async postUsersData(req: IAddUserData, res: ResponseToolkit) {
		try {
			const { id, name, address } = req.payload;
			pool.query(
				`insert into users (name,id,address) values('${name}',${id},'${address}')`,
				(err, resu) => {
					if (err) {
						console.log(err.message);
					}
					console.log(resu);
				}
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
			const { name, address } = req.payload;
			const { id } = req.params;
			pool.query(
				`update users set name='${name}',address='${address}' where id=${id}`,
				(err, resu) => {
					if (err) {
						console.log(err);
					}
					console.log(resu);
				}
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
			await pool.query(`delete from users where id=${req.params.id}`);
			return res.response(USER_DELETED_SUCCESS).code(SUCCESS);
		} catch {
			return res
				.response(INTERNAL_SERVER_ERROR_MESSAGE)
				.code(INTERNAL_SERVER_ERROR);
		}
	}
}
