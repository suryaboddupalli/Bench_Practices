import { createStore } from "redux";
import shopReducer from "./reducers/shopReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({shop:shopReducer});

const Store = createStore(rootReducer)

export default Store