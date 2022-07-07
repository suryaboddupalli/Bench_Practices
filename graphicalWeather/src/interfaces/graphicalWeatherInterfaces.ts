import hapi from '@hapi/hapi';

export interface IZipcode extends hapi.Request {
	payload: {
		zipCodeList: number;
	};
}
export interface ICities extends hapi.Request {
	payload: {
		displayLevel: number;
	};
}

export interface IZipcodePayload {
	zipCodeList: number;
}

export interface ICitiesPayload {
	displayLevel: number;
}
