import React from 'react';
import { Route } from 'react-router-dom'
import IndexRoute from './Routes/IndexRoute';

function App() {
    return (
        <div>
            <Route path='/' component={IndexRoute} />
        </div>
    )
}

export default App;
