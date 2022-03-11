import { BrowserRouter, Route, Switch } from "react-router-dom"
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login"
import Messenger from "./Components/Messenger/Messenger";
import Home from "./Components/Home";
import UpdateProfile from "./Components/User/Update";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/messenger' exact component={Messenger} />
        <Route path='/' exact component={Home} />
        <Route path='/updateProfile' exact component={UpdateProfile} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
