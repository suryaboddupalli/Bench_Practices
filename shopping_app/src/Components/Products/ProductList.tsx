import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/CartAction";
import { fetchProduct } from "../../Redux/Actions/ProductFetchAction";

export type product = {
  _id: string;
  Title?: string;
  Image?: string;
  Price?: number;
  Description?: string;
  color?: string;
  Memory?: string;
  Processor?: string;
  RearCamera?: string;
  FrontCamera?: string;
  Display?: string;
  Battery?: string;
};

type props = {
  productData: product;
};

function ProductList(props: props) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(props);
  return (
    <div className="col-11  col-lg-4  mb-5">
      <div className="card ">
        <img
          src={props.productData.Image}
          alt="img"
          style={{ height: "15rem" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.productData.Title}</h5>
          <h5 className="card-title">Rs.{props.productData.Price}</h5>
          <p className="card-text">{props.productData.Description}</p>
          <button
            className="btn btn-primary mt-2 me-2"
            onClick={() => dispatch(fetchProduct(props.productData._id))}
          >
            Show more
          </button>
          <button
            className="btn btn-primary mt-2 ms-2 "
            onClick={() =>
              dispatch(addToCart(props.productData._id)) &&
              history.push("/product")
            }
          >
            AddToCart
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(null, mapDispatchToProps)(ProductList);
