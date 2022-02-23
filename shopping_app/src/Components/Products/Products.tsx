import React, { useEffect } from "react";
import ProductList, { product } from "./ProductList";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Actions/ProductFetchAction";
import { RootState } from "../../Redux/Store";

function Products({ products }: any) {
  const data = useSelector((state: RootState) => state.ProductData);
  console.log(data);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section className="container">
      <div className="row ">
        {products &&
          products.map((product: product) => (
            <ProductList key={product._id} productData={product} />
          ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    products: state.ProductData.data,
  };
};

export default connect(mapStateToProps)(Products);
