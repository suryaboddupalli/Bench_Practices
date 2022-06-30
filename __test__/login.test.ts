import { dbServer } from '../src/database';
import { userControllers } from '../src/controllers/userControllers';
import { ILoginData } from '../src/intefaces/userInterface';
import hapi from '@hapi/hapi';

// interface IResponse extends hapi.ResponseToolkit {
// 	res: {
// 		response: ResponseObject;
// 	};
// 	code: ResponseObject;
// }

describe('user login', () => {
	let controller: userControllers;
	let req: ILoginData;
	let res: hapi.ResponseToolkit;
	beforeAll(async () => {
		await dbServer;

		// res={
		// 	response:{

		// 	} as hapi.ResponseObject
		// }as hapi.ResponseToolkit

		controller = new userControllers();
	});

	it('should login success', async () => {
		req = {
			payload: {
				email: 'revanth@gmail.com',
				password: 'revanth123',
			},
		} as ILoginData;
		const data = await controller.login(req, res);
		expect(data.statusCode).toBe(200);
	});

	it('should login fail with Incorrect password', async () => {
		req = {
			payload: {
				email: 'revanth@gmail.com',
				password: 'revanth1',
			},
		} as ILoginData;
		const data = await controller.login(req, res);
		expect(data.statusCode).toBe(400);
	});
	it('should login fail with  invalid email', async () => {
		req = {
			payload: {
				email: 'revant@gmail.com',
				password: 'revanth1',
			},
		} as ILoginData;
		const data = await controller.login(req, res);
		expect(data.statusCode).toBe(400);
	});
});
