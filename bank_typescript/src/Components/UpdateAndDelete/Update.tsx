import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAccount } from "../../Redux/Actions/FetchCustomerAction";
import { RootState } from "../../Redux/Store";
import { addAccount } from "../../Types";

const Update_Details = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.Fetchcustomer.User);
  const [data, setData] = useState<addAccount>({
    Name: "",
    Account_Number: parseInt(""),
    Phone: parseInt(""),
    Address: "",
    Address_Proof: parseInt(""),
    Pan_Card: parseInt(""),
  });
  const [updateRes, setUpdateRes] = useState();

  const { Name, Account_Number, Phone, Address, Address_Proof, Pan_Card } =
    data;
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAccount(id));
  }, []);

  useEffect(() => {
    if (user) {
      setData({ ...user });
      console.log(user);
    }
  }, [user]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/customer/update/${id}`, data)
      .then((res) => {
        console.log(res.data);
        setUpdateRes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="page">
      <div className="form-container" id="box">
        <h2>Updated Details </h2>
        {updateRes && <div className="text-success">{updateRes}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labels">Name</label>
            <br />
            <input type=" text" name="Name" value={Name} readOnly />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Account_Number</label> <br />
            <input
              type="text"
              name="Account_Number"
              value={Account_Number}
              readOnly
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Phone</label>
            <br />
            <input
              type="text"
              name="Phone"
              onChange={changeHandler}
              value={Phone}
            />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Address</label>
            <br />
            <input
              type="text"
              name="Address"
              onChange={changeHandler}
              value={Address}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <label className="labels">Address Proof</label>
            <br />
            <input
              type="text"
              name="Address_Proof"
              onChange={changeHandler}
              value={Address_Proof}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <label className="labels">Pan Card</label>
            <br />
            <input
              type="text"
              name="Pan_Card"
              onChange={changeHandler}
              value={Pan_Card}
            />
            <br />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">Update</button>
          </div>
          <br />
        </form>
        <button
          className="btn btn-secondary"
          onClick={() => history.push("/customers")}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Update_Details;
