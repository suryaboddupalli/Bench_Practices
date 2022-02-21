import { tranferConstants, initialData } from "../Actions/ActionTypes";
import { AnyAction } from "redux";

const initialState: initialData = {
  sender: {
    id: "",
    Name: "",
    Account_Number: parseInt(""),
    Balance: parseInt(""),
  },
  receiver: {
    id: "",
    Name: "",
    Account_Number: parseInt(""),
    Balance: parseInt(""),
  },
};

export const TransferReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case tranferConstants.ADD_SENDER:
      return {
        ...state,
        sender: {
          id: action.data._id,
          Name: action.data.Name,
          Account_Number: action.data.Account_Number,
          Balance: action.data.Balance,
        },
      };
    case tranferConstants.ADD_RECEIVER:
      return {
        ...state,
        receiver: {
          id: action.data._id,
          Name: action.data.Name,
          Account_Number: action.data.Account_Number,
          Balance: action.data.Balance,
        },
      };
    default:
      return state;
  }
};
