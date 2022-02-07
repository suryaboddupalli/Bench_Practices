import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { LoginReducer } from './Reducers/EmpReducer'
import { AccountReducer } from "./Reducers/AccountReducer";
import { bankReducer } from "./Reducers/BankingReducer";
import { TransferReducer } from "./Reducers/TransferReducer";

const RootReducer = combineReducers({
    LoginData: LoginReducer,
    Accounts: AccountReducer,
    Balance: bankReducer,
    Transfer: TransferReducer

})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))



