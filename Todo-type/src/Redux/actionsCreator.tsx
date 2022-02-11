import { actionTypes, Action } from "./action";
import { Dispatch } from "react";

export const deposit = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawal = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.WITHDRAWAL,
      payload: amount,
    });
  };
};
