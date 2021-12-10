import { createStore, combineReducers, applyMiddleware } from "redux";
import {laptopReducer} from "./reducers/laptopReducer";
import usersReducer from "./reducers/usersReducer";
const thunk = require('redux-thunk').default


const rootReducer = combineReducers({laptopReducer,usersReducer})
const store= createStore(rootReducer,applyMiddleware(thunk))

export default store