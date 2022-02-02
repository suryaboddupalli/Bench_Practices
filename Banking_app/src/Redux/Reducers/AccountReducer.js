import { ACCOUNT_DETAILS_FAIL, ACCOUNT_DETAILS_SUCCESS } from "../Actions/AccountAction";

const initialStates = {
    Accounts: [],
    error: ''
}

export const AccountReducer = (state = initialStates, action) => {
    switch (action.type) {
        case ACCOUNT_DETAILS_SUCCESS:
            return { Accounts: action.payload, error: '' }
        case ACCOUNT_DETAILS_FAIL:
            return { Accounts: [], error: action.payload }
        default:
            return state;
    }
}

