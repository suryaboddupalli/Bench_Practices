import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loginReducer,registerReducer } from './Reducers/UserReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {hotelReducer } from './Reducers/HotelReducer'
import navReducer from './Reducers/NavbarReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    register:registerReducer,
    hotel: hotelReducer,
    nav : navReducer,
})

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
