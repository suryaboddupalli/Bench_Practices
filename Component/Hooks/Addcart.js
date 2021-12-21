import React, { useReducer } from 'react'

const intialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
    }
}
export default function Addcart() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <h3>ItemName</h3>
            <p>cost</p>
            <button onClick={()=> dispatch({type:'decrement'})}>-</button>Addcart {state.count}
            <button onClick={()=> dispatch({type:'increment'})}>+</button>
        </div>
    )
}

