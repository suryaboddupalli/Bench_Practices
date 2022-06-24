import * as soap from 'soap';

export const soapClient = soap.createClientAsync(
	__dirname + '/../' + '/src/graphical.wsdl'
);
