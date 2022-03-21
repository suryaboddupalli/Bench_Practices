import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Data = {
  Comment: String;
  CustomerId: String;
  ProductId: String;
};

function Form() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [customerId, setCustomerId] = useState<string>();
  const [productId, setProductId] = useState<string>();
  const CId = localStorage.getItem("id");

  useEffect(() => {
    setCustomerId(CId);
    setProductId(id);
  }, [id, CId]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      CustomerId: customerId,
      ProductId: productId,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/review/add")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container mt-5 ">
      <div className="p-3 text-black text-center ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labels">Comment</label> <br />
            <input type="text" name="comment" onChange={changeHandler} />
          </div>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Form;
