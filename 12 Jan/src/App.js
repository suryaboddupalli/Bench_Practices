import IndexRoute from "./Routes/IndexRoute"
import { Route } from 'react-router-dom'
import { LoginProvider } from './Context/context'

function App() {
    return (
        <LoginProvider>
            <Route path='/' component={IndexRoute} />
        </LoginProvider>
    )
}

export default App
