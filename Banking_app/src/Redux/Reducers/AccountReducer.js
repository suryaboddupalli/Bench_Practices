import { ACCOUNT_DETAILS, FETCH_USER } from "../Actions/AccountAction";

const initialStates = {
    Users: [],
    User: {}
}

export const AccountReducer = (state = initialStates, action) => {
    switch (action.type) {
        case ACCOUNT_DETAILS:
            return { ...state, Users: action.payload, User: '' }
        case FETCH_USER:
            return { ...state, Users: '', User: action.payload }
        default:
            return state;
    }
}

