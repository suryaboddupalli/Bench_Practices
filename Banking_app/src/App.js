import React from 'react';
import { Route } from 'react-router-dom'
import IndexRoute from './Routes/IndexRoute';

function App() {
    return (
        <Route path='/' component={IndexRoute} />
    )
}

export default App;
