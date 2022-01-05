import IndexRoute from "./Routes/indexRoute";
import {Route} from 'react-router-dom'

function App() {
  return (
    <Route path='/' component={IndexRoute} />
  );
}

export default App;
