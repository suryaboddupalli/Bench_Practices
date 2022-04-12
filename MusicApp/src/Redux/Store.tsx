import { songReducer } from "./Reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  SongsReducer: songReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
