import Hapi from '@hapi/hapi';
import { BAD_REQUEST } from '../constants/httpCodes';

export const joiErrors = (
	req: Hapi.Request,
	res: Hapi.ResponseToolkit,
	err: any
) => {
	return res.response(err.details[0].message).code(BAD_REQUEST).takeover();
};
