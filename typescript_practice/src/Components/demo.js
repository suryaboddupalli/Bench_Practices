import React, { useReducer } from "react";

const intialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

function Demo() {
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
        </div>
    );
}

export default Demo;


