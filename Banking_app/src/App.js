import React from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import IndexRoute from './Routes/IndexRoute';

function App() {
    return (
        <div>
            <Navbar />
            <Route path='/' component={IndexRoute} />
        </div>
    )
}

export default App;
