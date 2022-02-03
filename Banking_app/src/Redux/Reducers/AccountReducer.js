import { ACCOUNT_DETAILS_FAIL, ACCOUNT_DETAILS_SUCCESS, FETCH_USER } from "../Actions/AccountAction";

const initialStates = {
    Accounts: [],
    error: '',
    User: []
}

export const AccountReducer = (state = initialStates, action) => {
    switch (action.type) {
        case ACCOUNT_DETAILS_SUCCESS:
            return { Accounts: action.payload, error: '' }
        case ACCOUNT_DETAILS_FAIL:
            return { Accounts: [], error: action.payload }
        case FETCH_USER:
            return console.log(initialStates.User), { User: action.payload }
        default:
            return state;
    }
}

