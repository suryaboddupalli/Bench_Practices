import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../Redux/Store";
import { fetchProduct } from "../../Redux/Actions/ProductFetchAction";
import { product } from "../../Redux/Actions/ActionTypes";

function Product({ currentItem }: any) {
  console.log(currentItem);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setData(currentItem);
  }, [currentItem]);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);
  return (
    <div>
      {data &&
        data.map((currentItem: product) => {
          <div className="card">
            <div className="ms-5">
              <img
                src={currentItem.Image}
                alt={"img"}
                className="img-fluid"
                style={{ width: 500, height: 300 }}
              />
            </div>
            <div className="ms-3">
              <h5>{currentItem.Title} </h5>
              <span>Rs.{currentItem.Price}</span>
              <p>color - {currentItem.color}</p>
              <p>Storage - {currentItem.Memory}</p>
              <p>Rear Camera - {currentItem.RearCamera}</p>
              <p>Front camera - {currentItem.FrontCamera}</p>
              <p>Processor - {currentItem.Processor}</p>
              <p>Display - {currentItem.Display}</p>
              <p>Battery - {currentItem.Battery}</p>
            </div>{" "}
          </div>;
        })}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    currentItem: state.product.data,
  };
};

export default connect(mapStateToProps)(Product);
