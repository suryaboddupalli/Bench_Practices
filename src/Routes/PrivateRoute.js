import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const isLoggedIn = (sessionStorage.getItem('isLoggedIn'))
    const Token = (sessionStorage.getItem('token'))
    return <Route {...rest} render={(props) => {
        if (isLoggedIn && Token) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }} />
}
export default PrivateRoute