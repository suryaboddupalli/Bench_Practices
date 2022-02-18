import axios from "axios";
import { fetchuser, user } from "./ActionTypes";
import { Dispatch } from "react";

const FETCH_USER = "FETCH_USER";

export const fetchUser: any = (data: user) => {
  return {
    type: FETCH_USER,
    payload: data,
  };
};

export const getAccount = (id: string) => {
  return function (dispatch: Dispatch<fetchuser>) {
    axios
      .get(`http://localhost:8000/customer/${id}`)
      .then((res) => {
        if (res.data) {
          dispatch(fetchUser(res.data));
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
