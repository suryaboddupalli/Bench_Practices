import React from 'react';
import { shallow } from 'enzyme';
import ButtonClick from '../Button';
import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (ButtonClick, expectedProps) => {
    const propsErr = checkPropTypes(ButtonClick.propTypes, expectedProps, 'props', ButtonClick.name);
    return propsErr;
};

describe('Button Component', () => {

    describe('Checking PropTypes', () => {

        test('NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(ButtonClick, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Button Text',
                emitEvent: mockFunc
            };
            wrapper = shallow(<ButtonClick {...props} />);
        });

        it('Should Render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});