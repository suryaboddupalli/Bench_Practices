import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { LoginReducer } from './Reducers/EmpReducer'
import { AccountReducer } from "./Reducers/AccountReducer";
import { bankReducer } from "./Reducers/BankingReducer";

const RootReducer = combineReducers({
    LoginData: LoginReducer,
    Account: AccountReducer,
    Balance: bankReducer
})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))



