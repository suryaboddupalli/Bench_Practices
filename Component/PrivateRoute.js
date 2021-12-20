import Cookies from 'cookies'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    // const token = (sessionStorage.getItem('Token'))
    const token = (Cookies.get('Token'))
     return <Route {...rest} render={(props) => {
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }} />
}
export default PrivateRoute