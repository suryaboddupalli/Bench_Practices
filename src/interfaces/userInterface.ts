import { Request } from '@hapi/hapi';

export interface IAddUserData extends Request {
	payload: {
		id: number;
		name: string;
		address: string;
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
		address: string;
	};
	params: {
		id: number;
	};
}
