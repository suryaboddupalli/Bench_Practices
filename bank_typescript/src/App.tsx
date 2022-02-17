import { Route, BrowserRouter } from "react-router-dom";
import IndexRoute from "./Routes/IndexRoute";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={IndexRoute} />
    </BrowserRouter>
  );
}

export default App;
