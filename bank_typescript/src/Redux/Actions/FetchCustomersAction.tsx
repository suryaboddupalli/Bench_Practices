import axios, { AxiosResponse } from "axios";
import { fetchuser, fetchusers, user } from "./ActionTypes";
import { Dispatch } from "react";

const FETCH_USERS = "FETCH_USERS";

export const accountDetails: any = (data: user[]) => {
  return {
    type: FETCH_USERS,
    payload: data,
  };
};

export const getAccountDetails = () => {
  return function (dispatch: Dispatch<fetchusers>) {
    axios
      .get("http://localhost:8000/customer/")
      .then((res: AxiosResponse) => {
        if (res) {
          dispatch(accountDetails(res.data));
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
