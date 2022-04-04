import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { LoginReducer } from './Reducers/EmpReducer'
import { AccountReducer } from "./Reducers/AccountReducer";
import { bankReducer } from "./Reducers/BankingReducer";
import { TransferReducer } from "./Reducers/TransferReducer";
import { transactionReducer } from "./Reducers/TransactionReducer";

const RootReducer = combineReducers({
    LoginData: LoginReducer,
    Accounts: AccountReducer,
    Balance: bankReducer,
    Transfer: TransferReducer,
    Transaction: transactionReducer

})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))



