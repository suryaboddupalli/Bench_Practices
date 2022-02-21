import { TransactionConstant } from "../Actions/ActionTypes";
import { AnyAction } from "redux";

const initialState = {
  transactions: [],
};

export const transactionReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TransactionConstant.GET_TRANSACTION:
      return (
        console.log(action.payload),
        {
          ...state,
          transactions: action.payload,
        }
      );
    default:
      return state;
  }
};
