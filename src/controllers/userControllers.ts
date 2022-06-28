import Hapi from '@hapi/hapi';
import {
	IRegisterData,
	ILoginData,
	IRefreshToken,
} from '../intefaces/userInterface';
import {
	SUCCESS,
	BAD_REQUEST,
	INTERNAL_SERVER_ERROR,
} from '../constants/httpCodes';
import bcrypt from 'bcryptjs';
import {
	accessToken,
	refreshToken,
	verifyRefreshToken,
	verifyAccessToken,
} from '../helpers/jwtHelpers';
import { config } from '../convict/config';
import { redis } from '../redis/index';
import {
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,
	REFERSH_TOKEN_SUCCESS,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_PASSWORD_INCORRECT,
	ACCESS_TOKEN_VERIFY_FAIL,
	INTERNAL_SERVER_ERROR_MESSAGE,
} from '../constants/constants';
import { userQuries } from '../repository/userQueries';

const query = new userQuries();
const cluster = new redis();

export class userControllers {
	async getUser(req: Hapi.Request, res: Hapi.ResponseToolkit) {
		try {
			const bearerToken = req.headers['authorization'].split(' ');
			const tokenVerifyResponse = verifyAccessToken(bearerToken[1]);
			if (tokenVerifyResponse.id) {
				const data = await query.getUserDataQuery(
					tokenVerifyResponse.id
				);
				return res.response(data.recordset[0]).code(SUCCESS);
			} else {
				return res.response(ACCESS_TOKEN_VERIFY_FAIL).code(SUCCESS);
			}
		} catch (err) {
			return res.response({ err }).code(INTERNAL_SERVER_ERROR);
		}
	}

	async register(req: IRegisterData, res: Hapi.ResponseToolkit) {
		try {
			const hashedPassword = await bcrypt.hash(
				req.payload.password,
				config.get('bcrypt')
			);
			const userRegisterData = await query.registerQuery(
				req.payload,
				hashedPassword
			);
			if (userRegisterData.recordset) {
				const access = accessToken(userRegisterData.recordset[0].id);
				const refresh = refreshToken(userRegisterData.recordset[0].id);
				if (access) {
					await cluster.addUserData(
						userRegisterData.recordset[0].id,
						JSON.stringify(userRegisterData.recordset[0])
					);
				}
				return res
					.response({
						access,
						refresh,
						message: USER_REGISTER_SUCCESS,
						data: userRegisterData.recordset[0],
					})
					.code(SUCCESS);
			}
			return res.response(USER_REGISTER_FAILURE).code(BAD_REQUEST);
		} catch (err) {
			return res
				.response({ message: INTERNAL_SERVER_ERROR_MESSAGE })
				.code(INTERNAL_SERVER_ERROR);
		}
	}

	async login(req: ILoginData, res: Hapi.ResponseToolkit) {
		try {
			const userLoginData = await query.loginQuery(req.payload.email);
			if (userLoginData.recordset[0]) {
				const passwordValidate = bcrypt.compareSync(
					req.payload.password,
					userLoginData.recordset[0].password
				);
				if (passwordValidate) {
					delete userLoginData.recordset[0].password;
					const access = accessToken(userLoginData.recordset[0].id);
					const refresh = refreshToken(userLoginData.recordset[0].id);
					if (access) {
						await cluster.addUserData(
							userLoginData.recordset[0].id,
							JSON.stringify(userLoginData.recordset[0])
						);
					}
					return res
						.response({
							access,
							refresh,
							message: USER_LOGIN_SUCCESS,
							data: userLoginData.recordset[0],
						})
						.code(SUCCESS);
				} else {
					return res
						.response({ message: USER_PASSWORD_INCORRECT })
						.code(BAD_REQUEST);
				}
			}
			return res
				.response({ message: USER_LOGIN_FAILURE })
				.code(BAD_REQUEST);
		} catch (err) {
			return res
				.response({ message: INTERNAL_SERVER_ERROR_MESSAGE })
				.code(INTERNAL_SERVER_ERROR);
		}
	}

	async refreshRequest(req: IRefreshToken, res: Hapi.ResponseToolkit) {
		try {
			const userId = verifyRefreshToken(req.payload.refreshToken);
			const access = accessToken(userId.id);
			const refresh = refreshToken(userId.id);
			return res
				.response({
					access,
					refresh,
					message: REFERSH_TOKEN_SUCCESS,
				})
				.code(SUCCESS);
		} catch (err) {
			return res.response({ err }).code(INTERNAL_SERVER_ERROR);
		}
	}
}
