import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import {
  FetchProductConst,
  productFetchSuccess,
  product,
  FetchSuccess,
} from "./ActionTypes";

export type loginType = {
  Username?: string;
  Password?: string;
};

export const FetchProductSuccess: any = (data: product[]) => {
  console.log(data);
  return {
    type: FetchProductConst.FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const FetchProductFail: any = (error: string) => {
  return {
    type: FetchProductConst.FETCH_PRODUCT_FAIL,
    payload: error,
  };
};

export const ProductSuccess: any = (data: product) => {
  console.log(data);
  return {
    type: FetchProductConst.PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProducts = () => {
  return function (dispatch: Dispatch<productFetchSuccess>) {
    axios
      .get("http://localhost:8000/items")
      .then((res) => {
        dispatch(FetchProductSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchProduct = (id: any) => {
  console.log(id);
  return function (dispatch: Dispatch<FetchSuccess>) {
    axios
      .get(`http://localhost:8000/items/${id}`)
      .then((res) => {
        dispatch(ProductSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
