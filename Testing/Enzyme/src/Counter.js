import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="counter">{count}</div>
            <button className="decrement" onClick={() => setCount(count - 1)}>decrement</button>
            <button className="increment" onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
}

export default Counter;
