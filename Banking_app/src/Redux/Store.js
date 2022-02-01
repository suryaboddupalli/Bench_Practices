import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { RegisterReducer, LoginReducer } from "./Reducers/AuthReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import { bankReducer } from "./Reducers/BankReducer";
import { transferReducer } from './Reducers/TransferReducer'

const RootReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    bank: bankReducer,
    transfer: transferReducer
})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))



