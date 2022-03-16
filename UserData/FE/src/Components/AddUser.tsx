import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

type userData = {
  Name: string;
  Email: string;
  Phone: number;
  Address: string;
};

const AddUser = () => {
  const [data, setData] = useState<userData>({
    Name: "",
    Email: "",
    Phone: parseInt(""),
    Address: "",
  });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8000/userData/add", data)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input type="text" name="Name" onChange={changeHandler} />
          <br />
        </div>
        <div>
          <label>Email</label> <br />
          <input type="text" name="Email" onChange={changeHandler} />
          <br />
        </div>
        <div>
          <label>Phone</label>
          <br />
          <input type="text" name="Phone" onChange={changeHandler} />
          <br />
        </div>
        <div>
          <label>Address</label>
          <br />
          <input type="text" name="Address" onChange={changeHandler} />
          <br />
        </div>
        <br />
        <div>
          <button className="btn btn-primary">Create</button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AddUser;
