import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import SingleItem from './Components/SingleItem/SingleItem'
import Navbar from './Components/Navbar'

function App({current}) {
    return (
        <Router>
        <div>
            
            <Switch>
                <Route path='/' component={Products} exact />
                <Route path='/cart' component={Cart} exact />
                <Route path='/product/:id' component={SingleItem} />
            </Switch>
            </div>
        </Router>
    )
}

export default App