import * as soap from "soap";

// export const soapClient = (func: any) => {
//     soap.createClient(__dirname + '/../' + '/src/graphical.wsdl', async (err: any, client: any) => {
//         func(client)
//     })
// }

export const soapClient = () => {
	const client = soap.createClientAsync(
		__dirname + "/../" + "/src/graphical.wsdl"
	);
	return client;
};
