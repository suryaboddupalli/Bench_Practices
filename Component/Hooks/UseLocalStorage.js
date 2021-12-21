import React, { useEffect, useState } from 'react'

function getValue(key, initialValue) {
    const value = JSON.parse(localStorage.getItem('key'))
    if (value) return (value)

    if (initialValue instanceof Function) return initialValue()
    return initialValue

}

function UseLocalStorage(key, initialValue) {
    const [userName, setUserName] = useState(() => {
        return getValue(key, initialValue)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(userName))
    }, [userName])
    return [userName, setUserName]
}



export default UseLocalStorage