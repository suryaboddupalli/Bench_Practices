import ComponentA from "./Context/componentA";
import Greetings from "./LifecyclesAndConditionalRendering/ConditionalRendering"
import Container from "./LifecyclesAndConditionalRendering/lifecycles";
import ComponentA from "./CodeSpliting/ComponentA"
import ComponentB from "./ErrorBoundary/ComponentB";
import Fragment from "./Fragments/Fragments";
import Counter from "./Hoc/Counter"
import Hover from "./Hoc/Hover"
import Greet from "./JsxInDeapth/DotNotation"
import Refs from "./Refs/Refs";

function App() {
  return (
    <div className="App">
      <ComponentB />
      <ComponentA />
      <Greetings />
      <Container />
	  <Fragment />
	  <Counter/>
	  <Hover />
	  <Greet />
	  <Refs />
    </div>
  );
}

export default App;
