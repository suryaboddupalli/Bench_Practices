import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

type Add = {
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

const AddProduct = () => {
  const history = useHistory();
  const [data, setData] = useState<Add>({
    Title: "",
    Image: "",
    Price: parseInt(""),
    Description: "",
    color: "",
    Memory: "",
    Processor: "",
    RearCamera: "",
    FrontCamera: "",
    Display: "",
    Battery: "",
  });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/items/add", data)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <div className="form-container" id="box">
        <h2>Create Account </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labels">Title</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Title"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Image</label> <br />
            <input
              type="text"
              className="text-box"
              name="Image"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Price</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Price"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Description</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Description"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Color</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="color"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Memory</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Memory"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Processor</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Processor"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">RearCamera</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="RearCamera"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">FrontCamera</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="FrontCamera"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Display</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Display"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Battery</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Battery"
              onChange={changeHandler}
            />
            <br />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">Create</button>
          </div>
          <br />
          <button
            className="btn btn-secondary"
            onClick={() => history.push("/customers")}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
