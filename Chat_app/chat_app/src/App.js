import IndexRoute from './Routes/IndexRoute'
import { Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={IndexRoute} />
    </BrowserRouter>
  )
}
export default App  