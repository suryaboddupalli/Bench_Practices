import { createContext, useEffect, useReducer } from "react";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./AuthActions"

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
};

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                error: false,
            };
        case LOGIN_FAILURE:
            return {
                user: null,
                error: true,
            };

        default:
            return state;
    }
};



export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    console.log(dispatch)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};