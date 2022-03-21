import React, { useEffect, useState } from "react";
import axios from "axios";

type product = {
  Name?: String;
  Cost?: number;
  Description?: String;
  Profile?: string;
};

function Products() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/product/get")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <section className="container">
      {products &&
        products.map((product) => (
          <div className="card ">
            <img src={product.Profile} alt="img" style={{ height: "15rem" }} />
            <div className="card-body text-center">
              <h5 className="card-title">{product.Name}</h5>
              <h5 className="card-title">Rs.{product.Cost}</h5>
              <p className="card-text">{product.Description}</p>
            </div>
            <button>Review</button>
            <button>Review Comments</button>
          </div>
        ))}
    </section>
  );
}

export default Products;
