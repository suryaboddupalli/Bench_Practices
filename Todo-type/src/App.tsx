import Todo from "./Component/Todo";
import Page from "./Components/Page";
import Dashboard from "./ReduxComponents/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Update from "./Components/Update";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Page} exact />
        <Route path="/update/:id" component={Update} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
