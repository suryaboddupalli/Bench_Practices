import { BrowserRouter, Route, Switch } from "react-router-dom"
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login"
import Messenger from "./Components/Messenger/Messenger";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/messenger' component={Messenger} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
