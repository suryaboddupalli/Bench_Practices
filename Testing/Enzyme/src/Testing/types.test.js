import React from 'react'
import { shallow } from 'enzyme'
import User from '../Users/User'
import checkPropTypes from 'check-prop-types'


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
            const propsErr = checkPropTypes(User.propTypes, expectedProps, 'props', User.name)
            expect(propsErr).toBeUndefined()
        })
    })
})