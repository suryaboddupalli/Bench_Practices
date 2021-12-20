import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Project from './Project'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} exact />
                <PrivateRoute path='/Dashboard/:id' component={Project} />
                <PrivateRoute path='/Dashboard' component={Dashboard} />
                <Route path='/' component={Home} />

            </Switch>
        </BrowserRouter>
    )
}

export default App