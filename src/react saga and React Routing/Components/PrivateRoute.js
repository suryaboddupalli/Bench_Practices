import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const isLoggedIn = (sessionStorage.getItem('isLoggedIn'))
    return <Route {...rest} render={(props) => {
        if (isLoggedIn === true) {
            return <Component {...props} />
        } else {
            return <Redirect to='/Home'></Redirect>
        }
    }} />
}
export default PrivateRoute