import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'

function UseLayoutEffect() {
    const [data, setData] = useState(false)
    const button = useRef()
    const popup = useRef()

    useEffect(() => {
        if (popup.current == null || button.current == null)
            return
        const bottom  = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`

    }, [data])

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null)
            return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`

    }, [data])

    return (
        <div>
            <button ref={button} onClick={() => setData(prev => !prev)}>show</button>
            {data && (<p ref={popup}>button clicked</p>)}
        </div>

    )
}

export default UseLayoutEffect