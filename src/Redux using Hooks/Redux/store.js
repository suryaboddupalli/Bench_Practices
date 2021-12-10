import itemReducer from "./reducers/itemReducer";
const { createStore, applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default

const store = createStore(itemReducer, applyMiddleware(thunk))

export default store