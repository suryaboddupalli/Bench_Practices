import { applyMiddleware, createStore } from "redux";
import shopReducer from "./reducers/shopReducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({shop:shopReducer});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()))

export default store
