import { createContext, useReducer } from "react"
import LoginReducer from "./reducer"

const INITIAL_STATE ={
    user: null
}

export const LoginContext = createContext(INITIAL_STATE)

export const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE)
    return (
        <LoginContext.Provider value={{user :state.user, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}