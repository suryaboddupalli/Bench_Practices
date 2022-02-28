import { cartConst, cartAction, states } from "../Actions/ActionTypes";

const initialState: states = {} as states;

export const cartReducer = (state = initialState, action: cartAction) => {
  switch (action.type) {
    case cartConst.FETCH_PRODUCT:
      return { ...state, Product: action.payload };
    case cartConst.ADD_TO_CART:
      const item = state.Product.find(
        (product) => product._id === action.payload
      );
      console.log(item);
      const cartData = state.cart;
      const inCart = cartData.find((item: any) =>
        item.id === action.payload ? true : false
      );
      console.log(inCart);
      return console.log({
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, quantity: item.Quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      });
    case cartConst.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
};
