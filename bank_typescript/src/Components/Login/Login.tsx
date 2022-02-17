import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginUser } from "../../Redux/Actions/EmpAuthAction";
import { useHistory } from "react-router-dom";
import { loginType } from "../../Types";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const postData = useSelector((state) => console.log(state));
  const [data, setData] = useState<loginType>({
    Username: "",
    Password: "",
  });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchLoginUser(data));
    console.log("posted");
  };

  return (
    <div className="page">
      <div className="form-container text-center mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labels">Username</label> <br />
            <input type="text" name="Username" onChange={changeHandler} />
          </div>
          <div className="form-group">
            <label className="labels">Password</label>
            <br />
            <input type="password" name="Password" onChange={changeHandler} />
          </div>
          <br />
          <div>
            <button className="btn btn-primary">login</button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
