import { render, screen } from '@testing-library/react';
import Enzyme, { shallow, mount } from 'enzyme';
import Parent from "./Parent"
import Counter from "./Counter"


describe('app', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Counter />)
        console.log(wrapper.debug())
    })

    test('count', () => {
        expect(wrapper.find('.counter').text()).toBe('0')
    })

    test('increment', () => {
        wrapper.find('.increment').simulate('click')
        expect(wrapper.find('.counter').text()).toBe('1')
    })

    test('decrement', () => {
        wrapper.find('.decrement').simulate('click')
        expect(wrapper.find('.counter').text()).toBe('-1')
    })


})


