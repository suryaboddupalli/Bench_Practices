import { graphicalWeatherServices } from '../src/services/graphicalWeatherServices';
import { xmlToJs } from '../src/xmlToJs';

describe('graphicalWeatherServices', () => {
	let service: graphicalWeatherServices;
	beforeAll(() => {
		service = new graphicalWeatherServices();
	});
	it('getZipcode', async () => {
		const res = await service.getZipcode({ zipCodeList: 12345 });
		const data = {
			$: {
				version: '1.0',
				'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
				'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
				'xsi:noNamespaceSchemaLocation':
					'https://graphical.weather.gov/xml/DWMLgen/schema/DWML.xsd',
			},
			latLonList: ['42.8018,-73.9281'],
		};
		expect(res).toBe(data);
	});
	it('getcities', async () => {
		const res = await service.getcities({
			displayLevel: 1,
		});
		const data = {
			$: {
				version: '1.0',
				'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
				'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
				'xsi:noNamespaceSchemaLocation':
					'https://graphical.weather.gov/xml/DWMLgen/schema/DWML.xsd',
			},
			latLonList: [
				'35.4,-97.6 36.2,-95.9 35.82,-83.98 33.65,-84.42 39.5,-119.78 35.13,-111.67 33.44,-112.02 32.12,-110.93 35.60,-88.92 35.22,-92.38 34.027,-118.329 32.73,-117.17 38.29,-104.52 39.75,-104.87 38.85,-77.04 24.58,-81.75 25.80,-80.28 28.55,-81.33 27.97,-82.53 43.57,-116.22 41.98,-87.9 39.85,-89.67 39.37,-101.7 37.07,-88.77 30.03,-90.03 44.801,-68.778 46.861,-68.012 43.65,-70.32 39.18,-76.67 42.23,-83.33 46.54,-87.41 46.83,-92.18 44.88,-93.22 34.27,-88.77 38.75,-90.37 45.8,-108.53 45.95,-112.5 48.22,-106.62 46.92,-114.08 40.83,-115.78 36.08,-115.17 35.05,-106.6 42.75,-73.8 42.93,-78.73 43.12,-76.12 40.77,-73.98 46.77,-100.75 46.9,-96.8 48.27,-101.28 41.42,-81.87 40.00,-82.88 41.6,-83.8 45.6,-122.6 42.08,-80.18 39.88,-75.25 40.35,-79.93 41.73,-72.65 43.58,-96.73 36.17,-86.78 30.3,-97.7 25.9,-97.43 32.9,-97.03 31.8,-106.4 32.00,-102.08 29.65,-95.28 29.53,-98.47 40.78,-111.97 47.63,-117.53 42.95,-87.9 37.5,-77.33 18.40,-66.00 18.34,-64.96 17.70,-64.90 61.17,-150.02 71.30,-156.78 64.82,-147.87 58.37,-134.58 64.50,-165.43',
			],
			cityNameList: [
				'Oklahoma City,OK|Tulsa,OK|Knoxville,TN|Atlanta,GA|Reno,NV|Flagstaff,AZ|Phoenix,AZ|Tucson,AZ|Jackson,TN|Little Rock,AR|Los Angeles,CA|San Diego,CA|Pueblo,CO|Denver,CO|Washington,DC|Key West,FL|Miami,FL|Orlando,FL|Tampa,FL|Boise,ID|Chicago,IL|Springfield,IL|Goodland,KS|Paducah,KY|New Orleans,LA|Bangor,ME|Caribou,ME|Portland,ME|Baltimore,MD|Detroit,MI|Marquette,MI|Duluth,MN|Minneapolis,MN|Tupelo,MS|St Louis,MO|Billings,MT|Butte,MT|Glasgow,MT|Missoula,MT|Elko,NV|Las Vegas,NV|Albuquerque,NM|Albany,NY|Buffalo,NY|Syracuse,NY|New York,NY|Bismarck,ND|Fargo,ND|Minot,ND|Cleveland,OH|Columbus,OH|Toledo,OH|Portland,OR|Erie,PA|Philadelphia,PA|Pittsburgh,PA|Hartford,CT|Sioux Falls,SD|Nashville,TN|Austin,TX|Brownsville,TX|Dallas,TX|El Paso,TX|Midland,TX|Houston,TX|San Antonio,TX|Salt Lake City,UT|Spokane,WA|Milwaukee,WI|Richmond,VA|San Juan,PR|St Thomas,VI|St Croix,VI|Anchorage,AK|Barrow,AK|Fairbanks,AK|Juneau,AK|Nome,AK',
			],
		};
		expect(res).toBe(data);
	});
});
