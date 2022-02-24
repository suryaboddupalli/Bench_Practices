import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginReducer } from "./Reducers/AuthReducer";
import thunk from "redux-thunk";
import {
  ProductsReducer,
  ProductReducer,
} from "./Reducers/FetchProductReducer";
import { cartReducer, itemReducer } from "./Reducers/CartReducer";

const RootReducer = combineReducers({
  LoginData: LoginReducer,
  ProductData: ProductsReducer,
  product: ProductReducer,
  cart: cartReducer,
  item: itemReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
