import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { addAccount } from "../../Types";

const CreateAccount = () => {
  const history = useHistory();
  const [data, setData] = useState<addAccount>({
    Name: "",
    Account_Number: parseInt(""),
    Phone: parseInt(""),
    Address: "",
    Address_Proof: parseInt(""),
    Pan_Card: parseInt(""),
  });
  const [response, setResponse] = useState();
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/customer/add", data)
      .then((res) => {
        setResponse(res.data);
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
            <label className="labels">Name</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Name"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Account_Number</label> <br />
            <input
              type="text"
              className="text-box"
              name="Account_Number"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Phone</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Phone"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Address</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Address"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Address Proof</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Address_Proof"
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Pan Card</label>
            <br />
            <input
              type="text"
              className="text-box"
              name="Pan_Card"
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
          {response && <div className="text-success">{response}</div>}
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
