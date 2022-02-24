import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../Redux/Store";

function Navbar({ cart }: any) {
  console.log(cart);
  const [cartCount, setCartCount] = useState<number>(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item: any) => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  const Token = localStorage.getItem("token");
  if (!Token) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shopping App</NavLink>
          </li>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">cart{cartCount}</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shopping App</NavLink>
          </li>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">cart-{cartCount}</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogOut</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    cart: state.cart.cart,
  };
};
export default connect(mapStateToProps)(Navbar);
