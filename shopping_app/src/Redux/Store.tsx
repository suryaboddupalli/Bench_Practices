import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginReducer } from "./Reducers/AuthReducer";
import thunk from "redux-thunk";
import {
  ProductsReducer,
  ProductReducer,
} from "./Reducers/FetchProductReducer";

const RootReducer = combineReducers({
  LoginData: LoginReducer,
  ProductData: ProductsReducer,
  product: ProductReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
