import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('checking h1', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toContain('hello')
})

test('checking p', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('p').text()).toContain('surya')
})

test('props', () => {
  const wrapper = shallow(<App name='surya' />)
  expect(wrapper.find('.welcome').text()).toBe('welcomesurya')
})

test('count', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.counter').text()).toBe('0')
})

test('increment', () => {
  const wrapper = shallow(<App />)
  wrapper.find('.increment').simulate('click')
  expect(wrapper.find('.counter').text()).toBe('1')
})

test('decrement', () => {
  const wrapper = shallow(<App />)
  wrapper.find('.decrement').simulate('click')
  expect(wrapper.find('.counter').text()).toBe('-1')
})
