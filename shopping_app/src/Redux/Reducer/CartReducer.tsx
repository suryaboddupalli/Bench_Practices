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
      // const inCart = state.cart.find((item: any) =>
      //   item.id === action.payload ? true : false
      // );
      return console.log({
        ...state,
        cart: item,
        // cart: inCart
        //   ? state.cart.map((item) =>
        //       item.id === action.payload
        //         ? { ...item, quantity: item.quantity + 1 }
        //         : item
        //     )
        //   : [...state.cart, { ...item, quantity: 1 }],
      });
    case cartConst.REMOVE_FROM_CART:
      return;
    //  {
    //     ...state,
    //     cart: state.cart.filter((item) => item.id !== action.payload),
    //   };

    default:
      return state;
  }
};
