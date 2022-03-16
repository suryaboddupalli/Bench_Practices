import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UsersReducer, UserReducer } from "./Reducer";

const RootReducer = combineReducers({
  UsersReducer: UsersReducer,
  userReducer: UserReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
