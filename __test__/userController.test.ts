import { dbServer } from '../src/database';
import { server } from '../src/server';
import { accessToken } from '../src/helpers/jwtHelpers';

describe('user test', () => {
	beforeAll(async () => {
		await dbServer;
	});
	describe('user register', () => {
		it('should register success', async () => {
			const res = await server.inject({
				method: 'post',
				url: '/register',
				payload: {
					firstname: 'surya',
					lastname: 'ravi',
					email: 'surya2311223@gmail.com',
					password: 'surya123',
					conformPassword: 'surya123',
				},
			});
			expect(res.statusCode).toBe(200);
		});
		it('should register fail with exist', async () => {
			const res = await server.inject({
				method: 'post',
				url: '/register',
				payload: {
					firstname: 'surya',
					lastname: 'ravi',
					email: 'surya@gmail.com',
					password: 'surya123',
					conformPassword: 'surya123',
				},
			});
			expect(res.statusCode).toBe(400);
			expect(res.result).toBe('User already Exist');
		});
	});
	describe('get user', () => {
		it('should getting user data success', async () => {
			const token = accessToken(2);
			const res = await server.inject({
				method: 'get',
				url: '/getData',
				headers: { authorization: `Bearer ${token}` },
			});
			expect(res.statusCode).toBe(200);
		});
		it('should getting user data fail', async () => {
			const res = await server.inject({
				method: 'get',
				url: '/getData',
				headers: {
					authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU2NTc4NjM1LCJleHAiOjE2NTY1NzkyMzV9.eXKhuCW3qM3anIgWH64znAvgkpnAMlGCBl3dGi3Ymvk`,
				},
			});
			expect(res.statusCode).toBe(500);
		});
	});
});
