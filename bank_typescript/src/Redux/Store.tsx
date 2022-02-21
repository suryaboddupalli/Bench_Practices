import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginReducer } from "./Reducers/EmpAuthReducer";
import thunk from "redux-thunk";
import { CustomersReducer } from "./Reducers/FetchCustomersReducer";
import { CustomerReducer } from "./Reducers/FetchCustomerReducer";
import { bankReducer } from "../Redux/Reducers/BankingReducer";
import { TransferReducer } from "../Redux/Reducers/TransferReducer";
import { transactionReducer } from "../Redux/Reducers/TransactionReducer";

const RootReducer = combineReducers({
  LoginData: LoginReducer,
  Fetchcustomers: CustomersReducer,
  Fetchcustomer: CustomerReducer,
  banking: bankReducer,
  Transfer: TransferReducer,
  Transaction: transactionReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
