import { bankingConstant } from "../Actions/ActionTypes";
import { balance } from "../Actions/ActionTypes";

const initialState = {
  balance: "",
};

export const bankReducer = (state = initialState, action: balance) => {
  switch (action.type) {
    case bankingConstant.UPDATE_BALANCE:
      return { ...state, balance: action.payload };
    default:
      return state;
  }
};
