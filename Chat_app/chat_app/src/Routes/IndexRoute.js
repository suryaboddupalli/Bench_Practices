import { BrowserRouter, Route, Switch } from "react-router-dom"
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login"
import Messenger from "../Components/Messenger/Messenger";
import Home from "../Components/Home";
import UpdateProfile from "../Components/User/Update";
import EmailVerification from "../Components/Auth/EmailVerification";
import ForgotPassword from "../Components/Auth/ForgotPassword";
import UpdatePassword from "../Components/Auth/UpdatePassword";
import PrivateRoute from "./PrivateRoute";

function IndexRoute() {
    return (
        <Switch>
            <Route path='/register' exact component={Register} />
            <Route path='/emailVerify/:id' exact component={EmailVerification} />
            <Route path='/login' exact component={Login} />
            <Route path='/messenger' exact component={Messenger} />
            <Route path='/' exact component={Home} />
            <Route path='/updateProfile' exact component={UpdateProfile} />
            <Route path='/ForgotPassword' exact component={ForgotPassword} />
            <Route path='/updatePass/:id' exact component={UpdatePassword} />
        </Switch>

    );
}

export default IndexRoute;
