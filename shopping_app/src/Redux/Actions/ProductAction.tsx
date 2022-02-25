import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import {
  FetchProductConst,
  FetchProduct,
  FetchProducts,
  product,
} from "./ActionTypes";

import { FetchCartProduct } from "./CartActions";

export const Products: any = (data: product[]) => {
  console.log(data);
  return {
    type: FetchProductConst.FETCH_PRODUCTS,
    payload: data,
  };
};

export const Product: any = (data: product) => {
  console.log(data);
  return {
    type: FetchProductConst.FETCH_PRODUCT,
    payload: data,
  };
};

export const ProductsData = () => {
  return function (dispatch: Dispatch<FetchProducts | FetchProduct>) {
    axios
      .get("http://localhost:8000/items")
      .then((res) => {
        dispatch(Products(res.data));
        dispatch(FetchCartProduct(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
