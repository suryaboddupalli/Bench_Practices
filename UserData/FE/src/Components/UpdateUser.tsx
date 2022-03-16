import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

type userData = {
  Name: string;
  Email: string;
  Phone: number;
  Address: string;
  _id?: string;
};

const UpdateUser = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<userData>({
    Name: "",
    Email: "",
    Phone: parseInt(""),
    Address: "",
  });
  const { Name, Email, Phone, Address } = data;
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/userData/update/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      setData(user);
    }
  }, [user]);

  return (
    <div>
      <h2>Update </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="Name"
            value={Name}
            onChange={changeHandler}
          />
          <br />
        </div>
        <div>
          <label>Email</label> <br />
          <input value={Email} />
          <br />
        </div>
        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="Phone"
            value={Phone}
            onChange={changeHandler}
          />
          <br />
        </div>
        <div>
          <label>Address</label>
          <br />
          <input
            type="text"
            name="Address"
            value={Address}
            onChange={changeHandler}
          />
          <br />
        </div>
        <br />
        <div>
          <button className="btn btn-primary">Update</button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default UpdateUser;
