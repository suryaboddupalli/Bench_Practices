import React from "react";
import Practice from "./Components/Practice";
import LoggedIn from "./Components/LoggedIn";
import Assertion from "./Components/Assertion";
import Counter from "./Components/Counter";
import Demo from "./Components/demo";
import DemoRef from "./Components/ref/DemoRef";
import MutableRef from "./Components/ref/MutableRef";
import ClassComponents from "./Components/ClassComponents";
import Private from "./Components/Auth/Private";
import Profile from "./Components/Auth/Profile";
import Home from "./Components/Generic Props/Home";
import Restrict from "./Components/RestrictingProps/Restrict";
import Wrap from "./Components/Wrapping/Wrap";
import Polymorphic from "./Components/Polymorphic/Polymorphic";

function App() {
  return (
    <div>
      <Demo />
      <Practice />
      <LoggedIn />
      <Assertion />
      <Counter />
      <DemoRef />
      <MutableRef />
      <ClassComponents message="count is" />
      <Private isLoggedIn={true} Component={Profile} />
      <Home />
      <Restrict />
      <Wrap />
      <Polymorphic />
    </div>
  );
}

export default App;
