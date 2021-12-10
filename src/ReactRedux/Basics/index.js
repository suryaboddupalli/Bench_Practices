const { createStore, combineReducers, applyMiddleware } = require("redux")
const logger = require('redux-logger').default
const thunk = require('redux-thunk')

const initialState = {
    noOfLaptops: 100
}

const initialMobile = {
    noOfMobile: 100
}

const BuyLaptop = () => {
    return {
        type: "BuyLaptop"
    }
}

const BuyMobile = () => {
    return {
        type: "BuyMobile"
    }
}

const laptopReducer = (state = initialState, action) => {
    if (action.type === "BuyLaptop") {
        return ({ noOfLaptops: state.noOfLaptops - 1 })
    }
    return (state)
}
const mobileReducer = (state = initialMobile, action) => {
    if (action.type === "BuyMobile") {
        return ({ noOfMobile: state.noOfMobile - 1 })
    }
    return (state)
}

const rootReducer = combineReducers({laptopReducer,mobileReducer})
const store = createStore(rootReducer,applyMiddleware(logger,thunk))
console.log(store)
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(BuyLaptop())
store.dispatch(BuyLaptop())
store.dispatch(BuyMobile())
store.dispatch(BuyLaptop())
store.dispatch(BuyMobile())

