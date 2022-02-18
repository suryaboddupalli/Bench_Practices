import axios from "axios";
import { Dispatch } from "react";
import { bankingConstant } from "./ActionTypes";
import { newAmount } from "../Actions/ActionTypes";

export const updateBal: any = (balance: newAmount) => {
  return {
    type: bankingConstant.UPDATE_BALANCE,
    payload: balance,
  };
};

export const updateBalance = (balance: newAmount, id: string) => {
  return function (dispatch: Dispatch<newAmount>) {
    axios
      .put(`http://localhost:8000/customer/balUpdate/${id}`, balance)
      .then((res) => {
        console.log(res);
        dispatch(updateBal(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
