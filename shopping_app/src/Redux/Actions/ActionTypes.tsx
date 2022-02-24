export enum logintypes {
  LOGGEDIN_SUCCESS = "LOGGEDIN_SUCCESS",
  LOGGEDIN_FAIL = "LOGGEDIN_FAIL",
}

interface success {
  type: logintypes.LOGGEDIN_SUCCESS;
  payload: string;
}

interface fail {
  type: logintypes.LOGGEDIN_FAIL;
  payload: string;
}

export type Action = success | fail;

export enum FetchProductConst {
  FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAIL = "FETCH_PRODUCT_FAIL",
  PRODUCT_SUCCESS = "PRODUCT_SUCCESS",
  FETCH_PRODUCT = "FETCH_PRODUCT",
}

export type product = {
  id?: string;
  Title: string;
  Image: string;
  Price: number;
  Description: string;
  color: string;
  Memory: string;
  Processor: string;
  RearCamera: string;
  FrontCamera: string;
  Display: string;
  Battery: string;
};

export interface productFetchSuccess {
  type: FetchProductConst.FETCH_PRODUCT_SUCCESS;
  payload: product[];
}
export type productFetch = {
  type: FetchProductConst.FETCH_PRODUCT;
  payload: product[];
};

export interface productFetchFail {
  type: FetchProductConst.FETCH_PRODUCT_FAIL;
  payload: string;
}

export type FetchProductAction = productFetchFail | productFetchSuccess;

export interface FetchSuccess {
  type: FetchProductConst.PRODUCT_SUCCESS;
  payload: product;
}

export enum cartConst {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

interface addToCart {
  type: cartConst.ADD_TO_CART;
  payload: string;
}

export type removeCart = {
  type: cartConst.REMOVE_FROM_CART;
  payload: string;
};

export type cartProduct = {
  ProductId: string;
  Productquantity: number;
};

export interface cart {
  cart: string;
}

export type cartAction = addToCart | removeCart;
