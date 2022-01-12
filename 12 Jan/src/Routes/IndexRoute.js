import React,{useContext} from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Dashboard from '../Components/Dashboard'
import { LoginContext } from '../Context/context'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'



function IndexRoute() {
    const {user} = useContext(LoginContext)
    console.log(user)
    return (
        <Switch> 
            <Route path='/dashboard' component={Dashboard} exact />
            <Route path='/' >{user ? <Redirect to='/dashboard'/> : <Login/>}</Route>
            <Route path='/register' component={Register} exact />
        </Switch>
    )
}

export default IndexRoute

{/* <Route path='/' >{user ? <Dashboard/> : <Register/>}</Route> 
            <Route path='/login' >{user ? <Redirect to='/'/> : <Login/>}</Route>
            <Route path='/register' >{user ? <Redirect to='/'/> : <Register/>}</Route>
         */}
