import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { removeFromCart } from "../../Redux/Actions/CartActions";

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const data = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.Price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div>
      <div className="card">
        <div className="ms-5">
          <img
            src={data.Image}
            alt={"img"}
            className="img-fluid"
            style={{ width: 500, height: 300 }}
          />
        </div>
        <div className="ms-3">
          <h5>{data.Title}</h5>
          <span>Rs.{data.Price}</span>
          <p>{data.Description}</p>
          <p>Quantity:{data.quantity}</p>
          <button
            onClick={() => {
              dispatch(removeFromCart(data._id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="card">
        <h2>Summary</h2>
        <span>TotalItems : {totalItems}</span>
        <span>Totalprice : {totalPrice}</span>
      </div>
    </div>
  );
}

export default Cart;
