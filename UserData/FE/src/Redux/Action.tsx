import axios from "axios";
import { addListener } from "process";
import { Dispatch } from "react";
export enum fetch {
  FETCH_DATA = "FETCH_DATA",
  FETCH_SINGLE = "FETCH_SINGLE",
}

export type userData = {
  Name: string;
  Email: string;
  Phone: Number;
  Address: string;
};

export type fetchusers = {
  type: fetch.FETCH_DATA;
  payload: userData[];
};

export type fetchuser = {
  type: fetch.FETCH_SINGLE;
  payload: userData;
};

export const dataFetch: any = (Data: userData) => {
  return {
    type: fetch.FETCH_DATA,
    payload: Data,
  };
};

export const SingleData: any = (Data: userData) => {
  console.log(Data);
  return {
    type: fetch.FETCH_DATA,
    payload: Data,
  };
};

export const getUsers = () => {
  return function (dispatch: Dispatch<fetchusers>) {
    axios
      .get(`http://localhost:8000/userData/get`)
      .then((res) => {
        if (res.data) {
          dispatch(dataFetch(res.data));
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUser = (id: any) => {
  return function (dispatch: Dispatch<fetchuser>) {
    axios
      .get(`http://localhost:8000/userData/get/${id}`)
      .then((res) => {
        if (res.data) {
          dispatch(SingleData(res.data));
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
