import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type privateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, Component: Component }: privateProps) => {
  if (isLoggedIn) {
    return <Component name="surya" />;
  } else {
    return <Login />;
  }
};

export default Private;
