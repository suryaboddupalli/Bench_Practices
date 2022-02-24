import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItems, { CartData } from "./CartItems";
import { RootState } from "../../Redux/Store";
import Navbar from "../Navbar/Navbar";

function Cart({ cart }: any) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item: any) => {
      items += item.quantity;
      price += item.quantity * item.Price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div>
      <Navbar />
      {cart.map((items: CartData) => (
        <CartItems key={items.id} itemData={items} />
      ))}
      <div className="card">
        <h2>Summary</h2>
        <span>TotalItems : {totalItems}</span>
        <span>Totalprice : {totalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    cart: state.cart.cart,
  };
};
export default connect(mapStateToProps)(Cart);
