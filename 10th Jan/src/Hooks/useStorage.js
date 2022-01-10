import React,{useState,useEffect} from 'react'

const PREFIX = 'data-'

function useStorage(key, initialValue) {
    const prifixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prifixedKey)
        // if (jsonValue != null) return (
        //     JSON.parse(jsonValue)
        // )
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prifixedKey, JSON.stringify(value))
    }, [prifixedKey, value])
    return [value, setValue]
}

export default useStorage
