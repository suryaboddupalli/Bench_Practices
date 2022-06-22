import { dbServer } from '../database';
import { IUserData } from '../intefaces/userInterface';

export class userQuries {
	pool: any;
	constructor() {
		(async () => {
			this.pool = await dbServer;
		})();
	}
	async getUserDataQuery(id: number) {
		return await this.pool.query('exec getData @id="' + id + '"');
	}

	async registerQuery(userRegisterData: IUserData, hashedPassword: string) {
		return await this.pool.query(
			'exec registration @email="' +
				userRegisterData.email +
				'",@firstname="' +
				userRegisterData.firstname +
				'",@lastname="' +
				userRegisterData.lastname +
				'",@password="' +
				hashedPassword +
				'";'
		);
	}

	async loginQuery(email: string) {
		return await this.pool.query('exec userlogin @email="' + email + '"');
	}
}
