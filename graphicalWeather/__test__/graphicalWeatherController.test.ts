import { graphicalWeatherController } from '../src/controller/graphicalWeatherController';
import { ResponseToolkit, ResponseObject } from '@hapi/hapi';
import {
	IZipcode,
	ICities,
} from '../src/interfaces/graphicalWeatherInterfaces';

describe('graphicalWeatherController', () => {
	let controller: graphicalWeatherController;
	let req: IZipcode | ICities;
	let res: Partial<ResponseToolkit>;
	let resObject: ResponseObject;
	beforeAll(() => {
		controller = new graphicalWeatherController();
		res = {
			response: jest
				.fn()
				.mockImplementation((data) => (resObject = data)),
		};
	});

	it('should return ZipcodeData', () => {
		req = {
			payload: {
				zipCodeList: 12345,
			},
		} as IZipcode;
		const mockfn = jest.spyOn(controller, 'getZipcodeData');
		controller.getZipcodeData(req as IZipcode, res as ResponseToolkit);
		expect(resObject.statusCode).toBe(200);
		expect(mockfn).toHaveBeenCalled();
	});

	it('should return Cities', () => {
		req = {
			payload: {
				displayLevel: 1,
			},
		} as ICities;
	});
	controller.getCityNames(req as ICities, res as ResponseToolkit);
	expect(resObject.statusCode).toBe(200);
});
