import React, { useState } from "react"

function UseStateWithPrev() {
    const intialCount = 0;
    const [count, setCount] = useState(intialCount)

    return (
        <div>
            count : {count}
            <button onClick={() => setCount(intialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(prevCount=>prevCount-1)}>Decrement</button>
        </div>
    )
}
export default UseStateWithPrev