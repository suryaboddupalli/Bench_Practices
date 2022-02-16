import React, { ChangeEvent, FormEvent, useState } from "react";

interface user {
  Name?: string;
  Account_Number?: number;
  Phone?: number;
  Address?: string;
  Address_Proof?: number;
}

const Register = () => {
  const [data, setData] = useState<user>();
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="page">
      <div className="form-container" id="box">
        <h2>Create Account </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labels">Name</label>
            <br />
            <input type=" text" name="Name" onChange={changeHandler} />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Account_Number</label> <br />
            <input type="text" name="Account_Number" onChange={changeHandler} />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Phone</label>
            <br />
            <input type="text" name="Phone" onChange={changeHandler} />
            <br />
          </div>
          <div className="form-group">
            <label className="labels">Address</label>
            <br />
            <input type="text" name="Address" onChange={changeHandler} />
            <br />
          </div>
          <br />
          <div className="form-group">
            <label className="labels">Address Proof</label>
            <br />
            <input type="text" name="Address_Proof" onChange={changeHandler} />
            <br />
          </div>
          <br />
          <div className="form-group">
            <label className="labels">Pan Card</label>
            <br />
            <input type="text" name="Pan_Card" onChange={changeHandler} />
            <br />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">Create</button>
          </div>
          <br />
          <button className="btn btn-secondary">Back</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
