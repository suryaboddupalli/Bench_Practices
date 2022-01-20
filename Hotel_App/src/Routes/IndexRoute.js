import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Hotel from '../components/HotelDetails/Hotel'
import Hotels from '../components/HotelDetails/Hotels'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

function IndexRoute() {
    return (
        <div>
            <Switch>
                <Route path='/' component={Hotels} exact />
                <Route path='/hotel/:id' component={Hotel} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/register' component={Register} exact/>
            </Switch>
        </div>
    )
}

export default IndexRoute