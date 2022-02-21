import axios from "axios";
import {
  TransactionConstant,
  transactionData,
  TransactionDetails,
} from "../Actions/ActionTypes";
import { Dispatch } from "react";

export const getTransactions = (data: transactionData) => {
  return {
    type: TransactionConstant.GET_TRANSACTION,
    payload: data,
  };
};

export const fetchTransactions = () => {
  return (dispatch: Dispatch<TransactionDetails>) => {
    axios
      .get("http://localhost:8000/transaction")
      .then((res) => {
        dispatch(getTransactions(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addTransaction = (data: transactionData) => {
  return (dispatch: Dispatch<TransactionDetails>) => {
    axios
      .post("http://localhost:8000/transaction/add", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
