import * as actionsTypes from '../actions/action_types'
import productsData from '../../Components/Products/Products.json'

const intialState = {
    products: productsData,
    cart: [],
    currentItem: null
}

const shopReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_TO_CART:
            const item = state.products.find(product => product.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return ({
                ...state,
                cart: inCart
                    ? state.cart.map(item => item.id === action.payload.id ?
                        { ...item, quantity: item.quantity + 1 }
                        : item)
                    : [...state.cart, { ...item, quantity: 1 }]
            })
        case actionsTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case actionsTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case actionsTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)
            }
        default:
            return state;
    }
}

export default shopReducer
