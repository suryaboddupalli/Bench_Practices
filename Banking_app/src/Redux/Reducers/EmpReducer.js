import { LOGGEDIN_FAIL, LOGGEDIN_SUCCESS } from "../Actions/EmpAuthAction";

const initialStates = {
    user: [],
    error: ''
}

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

