import { useState } from "react";

function App({ name }) {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
      >
        Learn React
      </a>
      <h1>hello</h1>
      <p>surya</p>
      <div className="welcome">welcome{name}</div>
      <div className="counter">{count}</div>
      <button className="decrement" onClick={() => setCount(count - 1)}>decrement</button>
      <button className="increment" onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default App;
