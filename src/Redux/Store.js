import { applyMiddleware, createStore } from "redux";
import shopReducer from "./reducers/shopReducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import navReducer from "./reducers/navReducer";

const rootReducer = combineReducers({shop:shopReducer,navbar: navReducer});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store
