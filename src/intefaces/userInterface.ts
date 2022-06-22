import Hapi from '@hapi/hapi';

export interface IRegisterData extends Hapi.Request {
	payload: {
		firstname: string;
		lastname: string;
		email: string;
		password: string;
		conformPassword: string;
	};
}
export interface ILoginData extends Hapi.Request {
	payload: {
		email: string;
		password: string;
	};
}

export interface IRefreshToken extends Hapi.Request {
	payload: {
		refreshToken: string;
	};
}

export interface ITokenVerifyData {
	id: number;
	iat: number;
	exp: number;
}

export interface IUserData {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	conformPassword: string;
}
