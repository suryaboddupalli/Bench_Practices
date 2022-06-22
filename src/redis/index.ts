import { cluster } from './server';

export class redis {
	async addUserData(id: number, user: string) {
		cluster.set(id, user);
	}
	async getUserData(id: number) {
		cluster.get(id, (err: string, result: string) => {
			return result;
		});
	}
}
