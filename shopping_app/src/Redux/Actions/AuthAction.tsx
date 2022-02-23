import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { logintypes, Action } from "./ActionTypes";

export type loginType = {
  Username?: string;
  Password?: string;
};

export const loginSuccess = (data: string) => {
  return {
    type: logintypes.LOGGEDIN_SUCCESS,
    payload: data,
  };
};

export const loginFail = (error: string) => {
  return {
    type: logintypes.LOGGEDIN_FAIL,
    payload: error,
  };
};

export const fetchLoginUser = (postData: loginType) => {
  return function (dispatch: Dispatch<Action>) {
    console.log(postData);
    axios
      .post("http://localhost:8000/employees/login", postData)
      .then((res: AxiosResponse) => {
        console.log(res.data.Token);
        localStorage.setItem("token", res.data.Token);
        dispatch(loginSuccess(res.data.Token));
      })
      .catch((error) => {
        console.log(error.response.data.error);
        dispatch(loginFail(error.response.data.error));
      });
  };
};
