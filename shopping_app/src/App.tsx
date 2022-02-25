import { BrowserRouter, Route } from "react-router-dom";
import IndexRoute from "./Routes/IndexRoutes";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={IndexRoute} />
    </BrowserRouter>
  );
}

export default App;
