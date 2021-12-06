import "./App.css";
import ComponentA from "./Context/componentA";
import Greetings from "./LifecyclesAndConditionalRendering/ConditionalRendering"
import Container from "./LifecyclesAndConditionalRendering/lifecycles";

function App() {
  return (
    <div className="App">
      <ComponentA />
      <Greetings />
      <Container />
    </div>
  );
}

export default App;
