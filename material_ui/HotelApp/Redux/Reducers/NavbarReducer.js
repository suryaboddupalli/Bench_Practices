import {TOGGLE_NAVBAR} from '../Actions/NavbarAction'

const initialState = null

const navReducer =(state=initialState , action)=>{
switch (action.type) {
    case TOGGLE_NAVBAR:
        return {
            ...state,
            togglenavbar: action.payload
        }
    default:
        return state
}
}

export default navReducer
