import { connect, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/CartAction";

export type CartData = {
  id: string;
  Title: string;
  quantity: number;
  Image?: string;
  Price?: number;
  Description?: string;
};

type props = {
  itemData: CartData;
};

function CartItems(props: props) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="ms-5">
        <img
          src={props.itemData.Image}
          alt={"img"}
          className="img-fluid"
          style={{ width: 500, height: 300 }}
        />
      </div>
      <div className="ms-3">
        <h5>{props.itemData.Title}</h5>
        <span>Rs.{props.itemData.Price}</span>
        <p>{props.itemData.Description}</p>
        <p>Quantity:{props.itemData.quantity}</p>
        <button
          onClick={() => {
            dispatch(removeFromCart(props.itemData.id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch: Dispatch<removeCart>) => {
//   return {
//     removeToCart: (id: string) => {
//       dispatch(removeFromCart(id));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(CartItems);

export default CartItems;
