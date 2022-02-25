import {
  FetchProductConst,
  FetchProducts,
  FetchProduct,
  productState,
  productsState,
} from "../Actions/ActionTypes";

const States: productState = {} as productState;
const initialStates: productsState = {} as productsState;

export const ProductsReducer = (
  state = initialStates,
  action: FetchProducts
) => {
  switch (action.type) {
    case FetchProductConst.FETCH_PRODUCTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ProductReducer = (state = States, action: FetchProduct) => {
  switch (action.type) {
    case FetchProductConst.FETCH_PRODUCT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
