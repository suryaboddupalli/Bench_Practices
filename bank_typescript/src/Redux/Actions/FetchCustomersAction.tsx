import axios, { AxiosResponse } from "axios";
import { fetchAccount, fetchuser, fetchusers, user } from "./ActionTypes";
import { Dispatch } from "react";

export const accountDetails = (type: string, data: user[]) => {
  return {
    type: fetchAccount.FETCH_USERS,
    payload: data,
  };
};

export const fetchUser = (type: string, data: user) => {
  return {
    type: fetchAccount.FETCH_USER,
    payload: data,
  };
};

export const getAccountDetails = () => {
  return function (dispatch: Dispatch<fetchusers>) {
    axios
      .get("http://localhost:8000/customer/")
      .then((res: AxiosResponse) => {
        const Data = res.data;
        dispatch(accountDetails(Data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAccount = (id: number) => {
  return function (dispatch: Dispatch<fetchuser>) {
    axios
      .get(`http://localhost:8000/customer/${id}`)
      .then((res) => {
        dispatch(fetchUser(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
