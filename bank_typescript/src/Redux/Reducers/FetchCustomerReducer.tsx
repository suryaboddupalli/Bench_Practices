import { fetchAccount, FetchAction } from "../Actions/ActionTypes";

type user = {
  Name: string;
  Account_Number: number;
  Phone: number;
  Address: string;
  Address_Proof: number;
  Pan_Card: number;
  Balance: number;
};

const initialStates: user[] = [];

export const CustomerReducer = (state = initialStates, action: FetchAction) => {
  switch (action.type) {
    case fetchAccount.FETCH_USERS:
      return { ...state, Users: action.payload, User: "" };
    case fetchAccount.FETCH_USER:
      return { ...state, Users: "", User: action.payload };
    default:
      return state;
  }
};
