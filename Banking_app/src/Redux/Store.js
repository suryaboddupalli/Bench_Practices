import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { LoginReducer } from './Reducers/EmpReducer'
import { AccountReducer } from "./Reducers/AccountReducer";

const RootReducer = combineReducers({
    LoginData: LoginReducer,
    Accounts: AccountReducer

})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))



