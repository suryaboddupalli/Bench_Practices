import { xmlToJs } from '../src/xmlToJs';

it('xmltojs', () => {
	const data =
		"<?xml version='1.0'?><dwml><latLonList>42.8018,-73.9281</latLonList></dwml>";
	expect(xmlToJs(data)).toEqual({ latLonList: ['42.8018,-73.9281'] });
});
