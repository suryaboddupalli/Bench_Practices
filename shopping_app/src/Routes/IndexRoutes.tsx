import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import SingleProduct from "../Components/Products/SingleProduct";
import AddProduct from "../Components/Products/AddProducts";
import Example from "../Components/Products/Example";
import PrivateRoute from "./PrivateRoute";

function IndexRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/products" exact component={Products} />
      <PrivateRoute path="/product/:id" exact component={SingleProduct} />
      <PrivateRoute path="/addproduct" exact component={AddProduct} />
      <PrivateRoute path="/add" exact component={Example} />
    </Switch>
  );
}

export default IndexRoute;
