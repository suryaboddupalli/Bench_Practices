import xml2js from 'xml2js';

export const xmlToJs = (data: any) => {
	let res;
	xml2js.parseString(data, (err, result) => {
		if (err) {
			return 'error';
		}
		res = result.dwml;
	});
	return res;
};
