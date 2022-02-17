import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import DashBoard from "../Components/Dashboard/Dashboard";
import CreateAccount from "../Components/Create_Account/Create_Account";
import CustomerList from "../Components/DepositAndWithdrawal/CustomerList";

function IndexRoute() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/create_account" component={CreateAccount} />
      <Route path="/deposit-withdrawal" component={CustomerList} />
    </Switch>
  );
}

export default IndexRoute;
