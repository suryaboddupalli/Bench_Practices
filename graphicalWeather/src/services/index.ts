import { soapClient } from '../soapClient';
import soap from 'soap';
import { IZipcode, ICities } from '../interfaces/graphicalWeatherInterfaces';

export class graphicalWeatherServices {
	client: soap.Client | undefined;
	constructor() {
		(async () => {
			this.client = await soapClient;
		})();
	}
	async getZipcode(data: IZipcode) {
		return await this.client?.LatLonListZipCodeAsync(data);
	}

	async getcities(data: ICities) {
		return await this.client?.LatLonListCityNamesAsync(data);
	}
}
