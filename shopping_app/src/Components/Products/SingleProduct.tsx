import React from "react";
import { product } from "../../Redux/Actions/ActionTypes";

type props = {
  currentItem: product[];
};

function SingleProduct(props: props) {
  console.log(props.currentItem);
  return (
    <div>
      {props.currentItem &&
        props.currentItem.map((currentItem: any) => (
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
          </div>
        ))}
    </div>
  );
}

export default SingleProduct;
