import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import SingleProduct from "../Components/Products/SingleProduct";

function IndexRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/products" exact component={Products} />
      <Route path="/product/:id" exact component={SingleProduct} />
    </Switch>
  );
}

export default IndexRoute;
