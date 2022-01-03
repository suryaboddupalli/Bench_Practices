import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../Components/Products/Products'
import Cart from '../Components/Cart/Cart'
import SingleItem from '../Components/SingleItem/SingleItem'
import Login from '../Components/LoginAndLogOut/Login'
import PrivateRoute from '../Routes/PrivateRoute'
import AddProducts from '../Components/Products/AddProduct'
import EditProduct from '../Components/Products/EditProduct'
import UserDetails from '../Components/Users/UserDetails'
import AdminRoute from '../Routes/AdminRoute'

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
                <AdminRoute path='/product/add' component={AddProducts} />
                <AdminRoute path='/product/edit' component={EditProduct} />
                <AdminRoute path='/users' component={UserDetails} />
            </Switch>
        </div>
    )
}

export default IndexRoute