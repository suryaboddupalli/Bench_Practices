import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { RegisterReducer, LoginReducer } from "./Reducers/AuthReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const RootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer
})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))



