import { fetchAccount, fetchusers, user } from "../Actions/ActionTypes";

type states = {
  Users: user[];
};

const initialStates: states = {} as states;

export const CustomersReducer = (state = initialStates, action: fetchusers) => {
  switch (action.type) {
    case fetchAccount.FETCH_USERS:
      return { ...state, Users: action.payload };
    default:
      return state;
  }
};
