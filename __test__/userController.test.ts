import { dbServer } from '../src/database';
import { userControllers } from '../src/controllers/userControllers';
import {
	ILoginData,
	IRegisterData,
	IRefreshToken,
} from '../src/intefaces/userInterface';
import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { accessToken } from '../src/helpers/jwtHelpers';

describe('userController', () => {
	let controller: userControllers;
	let res: Partial<ResponseToolkit>;
	let responseObject: ResponseObject;
	beforeAll(async () => {
		await dbServer;
		controller = new userControllers();
		res = {
			response: jest
				.fn()
				.mockImplementation((result) => (responseObject = result)),
		};
	});

	describe('user login', () => {
		let req: ILoginData;

		it('should return login success', async () => {
			req = {
				payload: {
					email: 'revanth@gmail.com',
					password: 'revanth123',
				},
			} as ILoginData;
			await controller.login(req as ILoginData, res as ResponseToolkit);
			console.log(responseObject.statusCode);
			expect(responseObject.message).toBe('User login Successful');
		});

		it('should return login fail with Incorrect password', async () => {
			req = {
				payload: {
					email: 'revanth@gmail.com',
					password: 'revanth1',
				},
			} as ILoginData;
			await controller.login(req as ILoginData, res as ResponseToolkit);
			expect(responseObject.message).toBe('Incorrect Password');
		});
		it('should return login fail with  invalid email', async () => {
			req = {
				payload: {
					email: 'revant@gmail.com',
					password: 'revanth1',
				},
			} as ILoginData;
			await controller.login(req as ILoginData, res as ResponseToolkit);
			expect(responseObject.message).toBe(
				'Email not found, Please do Register'
			);
		});
	});
	describe('User Register', () => {
		let req: IRegisterData;
		it('should return register fail with email already exist', async () => {
			req = {
				payload: {
					firstname: 'Surya',
					lastname: 'boddupalli',
					email: 'surya@gmail.com',
					password: 'surya123',
					conformPassword: 'surya123',
				},
			} as IRegisterData;
			await controller.register(
				req as IRegisterData,
				res as ResponseToolkit
			);
			expect(responseObject).toBe('User already Exist');
		});
		it('should return register success', async () => {
			req = {
				payload: {
					firstname: 'revanth',
					lastname: 'kanna',
					email: 'revanth321@gmail.com',
					password: 'revanth123',
					conformPassword: 'revanth123',
				},
			} as IRegisterData;
			await controller.register(
				req as IRegisterData,
				res as ResponseToolkit
			);
			expect(responseObject.message).toBe('User Register Successfully');
		});
	});
	describe('get userData', () => {
		it('should return user data succes', async () => {
			let req: Partial<Request>;
			const token = accessToken(2);
			req = {
				headers: {
					authorization: `Bearer ${token}`,
				},
			};

			await controller.getUser(req as Request, res as ResponseToolkit);
			expect(responseObject).toEqual({
				email: 'naveen@gmail.com',
				firstname: 'naveen',
				id: 2,
				lastname: 'thummala',
			});
		});
	});
	describe('refresh token', () => {
		test('should return refresh and accessToken', async () => {
			let req: Partial<Request>;
			const token =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU0MjQ4Njc0LCJleHAiOjE2ODU4MDYyNzR9.QGC45-i-2FBiU8F4yKEbewXJCAhLzC54S-ocqS9gdz0';
			req = {
				payload: {
					refreshToken: token,
				},
			};

			await controller.refreshRequest(
				req as IRefreshToken,
				res as ResponseToolkit
			);
			expect(responseObject.message).toBe('Token Refresh Successfully');
		});
	});
});
