import React, { useEffect, useState, useMemo } from 'react'

function Increment() {
    const [effect, setEffect] = useState(0)
    const [memo, setMemo] = useState(0)

    useEffect(() => { console.log(effect) }, [effect]);
    useMemo(() => { console.log(memo) }, [memo]);

    const effectClick = () => setEffect(effect + 1)
    const memoClick = () => setMemo(effect + 1)


    return (
        <div>
            <button onClick={effectClick}>useEffect Increment</button>
            <button onClick={memoClick}>useMemo Increment</button>
        </div>

    )
}

export default Increment