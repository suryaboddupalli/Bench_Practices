import jwt from 'jsonwebtoken';
import { config } from '../convict/config';
import { ITokenVerifyData } from '../intefaces/userInterface';

const jwtConfig = config.get('jwt');

export const accessToken = (userId: number) => {
	const payload = {
		id: userId,
	};
	const options = {
		expiresIn: jwtConfig.accessTokenExpires,
	};
	return jwt.sign(payload, jwtConfig.accessSecret, options);
};

export const refreshToken = (userId: number) => {
	const payload = {
		id: userId,
	};
	const options = {
		expiresIn: jwtConfig.refreshTokenExpires,
	};
	return jwt.sign(payload, jwtConfig.refreshSecret, options);
};

export const verifyRefreshToken = (refreshToken: string) => {
	return jwt.verify(
		refreshToken,
		jwtConfig.refreshSecret
	) as ITokenVerifyData;
};

export const verifyAccessToken = (token: string) => {
	return jwt.verify(token, jwtConfig.accessSecret) as ITokenVerifyData;
};
