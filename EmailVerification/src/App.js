import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EmailVerify from "./Components/EmailVerify"
import ForgotPassword from "./Components/ForgotPassword"
import ResetPassword from "./Components/ResetPassword"

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/register/:id" exact component={EmailVerify} />
      <Route path="/forgotPassword" exact component={ForgotPassword} />
      <Route path="/resetpassword" exact component={ResetPassword} />

    </Switch>
  );
}

export default App;