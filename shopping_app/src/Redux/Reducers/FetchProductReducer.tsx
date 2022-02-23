import {
  FetchProductAction,
  FetchProductConst,
  product,
  FetchSuccess,
} from "../Actions/ActionTypes";

export type productState = {
  error: string;
  data: product[];
};

type pstate = {
  data: product;
};

const States: pstate = {} as pstate;
const initialStates: productState = {} as productState;

export const ProductsReducer = (
  state = initialStates,
  action: FetchProductAction
) => {
  switch (action.type) {
    case FetchProductConst.FETCH_PRODUCT_SUCCESS:
      return { ...state, data: action.payload };
    case FetchProductConst.FETCH_PRODUCT_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const ProductReducer = (state = States, action: FetchSuccess) => {
  switch (action.type) {
    case FetchProductConst.PRODUCT_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
