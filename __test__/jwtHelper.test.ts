import * as jwt from '../src/helpers/jwtHelpers';

describe('jwt ', () => {
	test('access token', () => {
		const mock = jest
			.spyOn(jwt, 'accessToken')
			.mockReturnValue('access generated');
		expect(jwt.accessToken(2)).toBe('access generated');
		expect(mock).toHaveBeenCalled();
	});
	test('refresh token', () => {
		const mock = jest
			.spyOn(jwt, 'refreshToken')
			.mockReturnValue('refresh generated');
		expect(jwt.refreshToken(2)).toBe('refresh generated');
		expect(mock).toHaveBeenCalled();
	});
	test('verify access token', () => {
		const mock = jest.spyOn(jwt, 'verifyRefreshToken');
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU0MjQ4Njc0LCJleHAiOjE2ODU4MDYyNzR9.QGC45-i-2FBiU8F4yKEbewXJCAhLzC54S-ocqS9gdz0';
		expect(jwt.verifyRefreshToken(token).id).toBe(2);
		expect(mock).toHaveBeenCalled();
	});
});
