import React from 'react'
import { Route, Redirect } from 'react-router-dom'


function PrivateRoute({ component: Component, ...rest }) {
    const data = (localStorage.getItem('token'))
    console.log(data);
    return <Route {...rest} render={(props) => {
        if (data) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login'></Redirect>
        }
    }} />
}
export default PrivateRoute