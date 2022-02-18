import { fetchAccount, fetchuser, user } from "../Actions/ActionTypes";

type states = {
  User: user;
};

const initialStates: states = {} as states;

export const CustomerReducer = (state = initialStates, action: fetchuser) => {
  switch (action.type) {
    case fetchAccount.FETCH_USER:
      return { ...state, User: action.payload };
    default:
      return state;
  }
};
