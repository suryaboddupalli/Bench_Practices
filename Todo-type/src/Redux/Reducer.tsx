import { actionTypes, Action } from "./action";

const initialState = 0;

export const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return console.log(action.payload), state + action.payload;
    case actionTypes.WITHDRAWAL:
      return state - action.payload;
    default:
      return state;
  }
};
