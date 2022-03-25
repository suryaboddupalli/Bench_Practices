import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { hotelReducer } from "./Reducer";


const RootReducer = combineReducers({
    hotels: hotelReducer
})

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
