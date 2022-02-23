import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Products from "../Components/Products/Products";
import Product from "../Components/Products/Product";

function IndexRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  );
}

export default IndexRoute;
