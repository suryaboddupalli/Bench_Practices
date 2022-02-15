import React, { useReducer } from "react";

type counter = {
  count: number;
};

type counterAction = {
  type: "increment" | "decrement";
  payload: number;
};

type reset = {
  type: "reset";
};

const intialState = { count: 0 };

function reducer(state: counter, action: counterAction | reset) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: intialState.count };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      count :{state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
