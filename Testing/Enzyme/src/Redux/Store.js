import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { DataReducer } from "./Reducer";


const RootReducer = combineReducers({
    reducer: DataReducer
})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
