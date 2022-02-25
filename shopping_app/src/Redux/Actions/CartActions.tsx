import { cartConst, FetchProductConst, product, cartData } from "./ActionTypes";

export const addToCart = (itemId: string) => {
  return {
    type: cartConst.ADD_TO_CART,
    payload: itemId,
  };
};

export const removeFromCart = (itemId: string) => {
  return {
    type: cartConst.REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const FetchCartProduct: any = (data: product[]) => {
  console.log(data);
  return {
    type: cartConst.FETCH_PRODUCT,
    payload: data,
  };
};
