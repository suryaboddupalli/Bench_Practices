import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types'

Enzyme.configure({ adapter: new Adapter() });




describe('User Component', () => {
  describe('Props', () => {
    test('checking Warning', () => {
      const expectedProps = {
        userData: [{
          Name: "surya",
          Age: 21,
          ActiveStatus: true
        }]
      }
      const propsErr = checkPropTypes(App.propTypes, expectedProps, 'props', App.name)
      expect(propsErr).toBeUndefined()
    })
  })
})