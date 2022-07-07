import { dbServer } from '../database';
import { IUserData } from '../intefaces/userInterface';

export class userQuries {
	private pool: any;
	constructor() {
		(async () => {
			this.pool = await dbServer;
		})();
	}
	public async getUserDataQuery(id: number) {
		return await this.pool.query('exec getData @id="' + id + '"');
	}

	public async registerQuery(
		userRegisterData: IUserData,
		hashedPassword: string
	) {
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

	public async loginQuery(email: string) {
		return await this.pool.query('exec userlogin @email="' + email + '"');
	}
}
