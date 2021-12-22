import * as actionsTypes from './action_types'

export const addToCart = (itemId) => {
    return {
        type: actionsTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeToCart = (itemId) => {
    return {
        type: actionsTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQuantity = (itemId, value) => {
    return {
        type: actionsTypes.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }

}

export const loadCurrentItems = (item) => {
    return {
        type: actionsTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}