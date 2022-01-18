import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext();

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const LStoreData = JSON.parse(localStorage.getItem('dataStore'))
        if (LStoreData) {
            setData(LStoreData)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('dataStore', JSON.stringify(data))
    }, [data])


    return (
        <StoreContext.Provider value={[data, setData]}>
            {children}
        </StoreContext.Provider>
    )
}