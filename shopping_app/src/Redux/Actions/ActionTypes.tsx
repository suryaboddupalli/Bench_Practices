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
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
}

export type product = {
  _id: string;
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
  Quantity: number;
};

export type FetchProducts = {
  type: FetchProductConst.FETCH_PRODUCTS;
  payload: product[];
};

export type cart = {
  _id?: string;
  Title?: string;
  Image?: string;
  Price?: number;
  Description?: string;
  color?: string;
  Memory?: string;
  Processor?: string;
  RearCamera?: string;
  FrontCamera?: string;
  Display?: string;
  Battery?: string;
  Quantity?: number;
};

export type FetchProduct = {
  type: FetchProductConst.FETCH_PRODUCT;
  payload: product;
};

export type CartFetchProduct = {
  type: cartConst.FETCH_PRODUCT;
  payload: cart[];
};

export type productsState = {
  data: product[];
};

export type productState = {
  data: product;
};

export enum cartConst {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  FETCH_PRODUCT = "FETCH_PRODUCT",
}
export type cartData = {
  product: product[];
  quantity: string;
};

interface addToCart {
  type: cartConst.ADD_TO_CART;
  payload: string;
}

export type removeCart = {
  type: cartConst.REMOVE_FROM_CART;
  payload: string;
};

export type FetchCartProduct = {
  type: cartConst.FETCH_PRODUCT;
  payload: product[];
};

// type cartActions = {
//   addAndRemove: addToCart | removeCart;
//   fetch: FetchCartProduct;
// };

export type cartAction = addToCart | removeCart | FetchCartProduct;

export type states = {
  cart: product[];
  Product: product[];
};
