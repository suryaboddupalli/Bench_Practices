import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { ProductsData, Product } from "../../Redux/Actions/ProductAction";
import { useHistory, Link } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/CartActions";

function Products({ products }: any) {
  const history = useHistory();
  const data = useSelector((state: RootState) => state.Products.data);
  console.log(data);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsData());
  }, []);
  return (
    <div className="row ">
      {products &&
        products.map((product: any) => (
          <div key={product._id} className="col-11  col-lg-4  mb-5">
            <div className="card ">
              <img src={product.Image} alt="img" style={{ height: "15rem" }} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.Title}</h5>
                <h5 className="card-title">Rs.{product.Price}</h5>
                <p className="card-text">{product.Description}</p>
                <Link to={`/product/${product._id}`}>
                  <button
                    className="btn btn-primary mt-2 me-2"
                    onClick={() => dispatch(Product(product))}
                  >
                    Show more
                  </button>
                </Link>
                <button
                  className="btn btn-primary mt-2 ms-2 "
                  onClick={() => dispatch(addToCart(product._id))}
                >
                  AddToCart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    products: state.Products.data,
  };
};

export default connect(mapStateToProps)(Products);
