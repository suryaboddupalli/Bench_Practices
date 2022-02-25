import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { LoginReducer } from "./Reducer/AuthReducer";
import { ProductReducer, ProductsReducer } from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/CartReducer";

const RootReducer = combineReducers({
  Login: LoginReducer,
  Products: ProductsReducer,
  Product: ProductReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
