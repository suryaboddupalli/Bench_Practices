import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
    const Token = (sessionStorage.getItem('token'))
    const isAdmin = (sessionStorage.getItem('isAdmin'))
    return <Route {...rest} render={(props) => {
        if (Token && isAdmin) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }} />
}
export default PrivateRoute