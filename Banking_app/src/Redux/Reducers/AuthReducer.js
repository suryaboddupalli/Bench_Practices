import { LOGGEDIN_FAIL, LOGGEDIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../Actions/AuthActions";

const initialStates = {
    user: [],
    error: ''
}
console.log(initialStates);

export const LoginReducer = (state = initialStates, action) => {
    switch (action.type) {
        case LOGGEDIN_SUCCESS:
            return { user: action.payload, error: '' }
        case LOGGEDIN_FAIL:
            return { user: [], error: action.payload }
        default:
            return state;
    }
}

export const RegisterReducer = (state = initialStates, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { user: action.payload, error: '' }
        case REGISTER_FAIL:
            return { user: [], error: action.error }
        default:
            return state;
    }
}