import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginReducer } from "./Reducers/EmpAuthReducer";
import thunk from "redux-thunk";
import { CustomerReducer } from "./Reducers/FetchCustomerReducer";

const RootReducer = combineReducers({
  LoginData: LoginReducer,
  FetchCustomers: CustomerReducer,
});

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
