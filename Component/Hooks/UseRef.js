import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [data, setData] = useState()
    const renderCount = useRef()

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    const focus= ()=>{
       inputRef.current.focus()
       inputRef.current.value ='please enter correct data'
    }

    return (
        <div>
            <input ref={inputRef} type='text' value={data} onChange={e => { setData(e.target.value) }} />
            <p>{data}</p>
            <p>{renderCount}</p>
            <button onClick={focus}>submit</button>
        </div>
    )
}

export default UseRef