import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../Components/Products/Products'
import Cart from '../Components/Cart/Cart'
import SingleItem from '../Components/SingleItem/SingleItem'
import Login from '../Components/LoginAndLogOut/Login'
import PrivateRoute from '../Routes/PrivateRoute'

function IndexRoute() {
    return (
        <div>
            <Switch>
                <Route path='/' component={Products} exact />
                <PrivateRoute path='/dashboard' component={Products} exact />
                <Route path='/cart' component={Cart} exact />
                <PrivateRoute path='/cart' component={Cart} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/product/:id' component={SingleItem} />
            </Switch>
        </div>
    )
}

export default IndexRoute