import {
  cartConst,
  cartAction,
  FetchProductAction,
  productFetch,
  FetchProductConst,
  product,
} from "../Actions/ActionTypes";

type CartData = {
  id?: string;
  Title?: string;
  quantity: number;
  Image?: string;
  Price?: number;
  Description?: string;
};

type Cart = {
  products: any;
  cart: CartData[];
};

type fetchState = {
  Products: any;
};

const States: fetchState = {
  Products: [],
};

const intialState: Cart = {
  products: States,
  cart: [],
};

console.log(intialState);

export const cartReducer = (state = intialState, action: cartAction) => {
  console.log(state.products);
  switch (action.type) {
    case cartConst.ADD_TO_CART:
      const item = state.products.find(
        (product: CartData) => product.id === action.payload
      );
      console.log(item);
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case cartConst.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const itemReducer = (state = States, action: productFetch) => {
  switch (action.type) {
    case FetchProductConst.FETCH_PRODUCT:
      return console.log({ ...state, products: action.payload });
    default:
      return state;
  }
};
