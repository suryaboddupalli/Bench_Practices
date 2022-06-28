import Hapi from '@hapi/hapi';
import { INTERNAL_SERVER_ERROR_MESSAGE } from '../constants/index';
import { INTERNAL_SERVER_ERROR } from '../constants/httpConstants';
import { graphicalWeatherServices } from '../services/graphicalWeatherServices';
import { IZipcode, ICities } from '../interfaces/graphicalWeatherInterfaces';
import { xmlToJs } from '../xmlToJs';

const services = new graphicalWeatherServices();

export class graphicalWeatherController {
	async getZipcodeData(req: Hapi.Request, res: Hapi.ResponseToolkit) {
		try {
			const xmlData = await services.getZipcode(req.payload as IZipcode);
			return xmlToJs(xmlData[0].listLatLonOut.$value);
		} catch (err) {
			return res
				.response({ message: INTERNAL_SERVER_ERROR_MESSAGE })
				.code(INTERNAL_SERVER_ERROR);
		}
	}

	async getCityNames(req: Hapi.Request, res: Hapi.ResponseToolkit) {
		try {
			const xmlData = await services.getcities(req.payload as ICities);
			return xmlToJs(xmlData[0].listLatLonOut.$value);
		} catch (err) {
			return res
				.response({ message: INTERNAL_SERVER_ERROR_MESSAGE })
				.code(INTERNAL_SERVER_ERROR);
		}
	}
}
