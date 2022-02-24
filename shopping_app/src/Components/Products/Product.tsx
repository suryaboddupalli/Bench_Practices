import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../Redux/Store";
import Navbar from "../Navbar/Navbar";
import SingleProduct from "./SingleProduct";

function Product({ currentItem }: any) {
  console.log(currentItem);
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <div>
      <Navbar />
      {/* <SingleProduct currentItem={currentItem} /> */}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    currentItem: state.product.data,
  };
};

export default connect(mapStateToProps)(Product);
