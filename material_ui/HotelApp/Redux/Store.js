import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loginReducer,registerReducer } from './Reducers/UserReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {hotelReducer } from './Reducers/HotelReducer'
import navReducer from './Reducers/NavbarReducer'
import { BookReducer } from './Reducers/BookingReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    register:registerReducer,
    hotel: hotelReducer,
    nav : navReducer,
    book: BookReducer
})

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
