import { cluster } from './server';

export class redis {
	async addUserData(id: string, user: string) {
		cluster.set(id, user);
	}
}
