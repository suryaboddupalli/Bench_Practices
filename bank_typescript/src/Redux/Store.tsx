import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginReducer } from "./Reducers/EmpAuthReducer";
import thunk from "redux-thunk";
import { CustomersReducer } from "./Reducers/FetchCustomersReducer";
import { CustomerReducer } from "./Reducers/FetchCustomerReducer";
import { bankReducer } from "../Redux/Reducers/BankingReducer";

const RootReducer = combineReducers({
  LoginData: LoginReducer,
  Fetchcustomers: CustomersReducer,
  Fetchcustomer: CustomerReducer,
  banking: bankReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
