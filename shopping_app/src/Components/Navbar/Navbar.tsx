import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../Redux/Store";
import "./Navbar.css";

function Navbar() {
  const Token = localStorage.getItem("token");
  if (!Token) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shopping App</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">cart</NavLink>
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
            <NavLink to="/cart">cart-</NavLink>
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
  return {};
};
export default connect(mapStateToProps)(Navbar);
