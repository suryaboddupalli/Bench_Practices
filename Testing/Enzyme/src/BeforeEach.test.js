import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('app', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App name={'surya'} />)
    })

    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('checking h1', () => {
        expect(wrapper.find('h1').text()).toContain('hello')
    })

    test('checking p', () => {
        expect(wrapper.find('p').text()).toContain('surya')
    })

    test('props', () => {
        expect(wrapper.find('.welcome').text()).toBe('welcomesurya')
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


