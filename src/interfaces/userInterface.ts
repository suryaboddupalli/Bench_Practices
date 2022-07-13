import { Request } from '@hapi/hapi';

export interface IAddUserData extends Request {
	payload: {
		id: number;
		name: string;
		age: number;
	};
}

export interface IDeleteUserData extends Request {
	params: {
		id: number;
	};
}

export interface IUpdateUserData extends Request {
	payload: {
		name: string;
		age: number;
	};
	params: {
		id: number;
	};
}
