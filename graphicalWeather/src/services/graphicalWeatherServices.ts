import { soapClient } from '../soapClient';
import soap from 'soap';
import {
	IZipcodePayload,
	ICitiesPayload,
} from '../interfaces/graphicalWeatherInterfaces';
import { config } from '../convict/config';

export class graphicalWeatherServices {
	private client: soap.Client | undefined;
	constructor() {
		(async () => {
			this.client = await soapClient;
		})();
	}
	// async setEndpointUrl() {
	// 	return this.client?.setEndpoint(config.get('url'));
	// }
	public async getZipcode(data: IZipcodePayload) {
		return await this.client?.LatLonListZipCodeAsync(data);
	}

	public async getcities(data: ICitiesPayload) {
		return await this.client?.LatLonListCityNamesAsync(data);
	}
}
