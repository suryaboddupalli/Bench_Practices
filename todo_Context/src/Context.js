import React,{useState} from 'react'

export const ContextData = React.createContext()

const Data = {id:1,name:'surya'}

export const ContextProvider = ({children})=>{
    const[data,setData]=useState(Data)
    return(
        <ContextData.Provider value='hi'>
            {children}
        </ContextData.Provider>
    )
}