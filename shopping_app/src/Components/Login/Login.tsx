import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchLoginUser, loginType } from "../../Redux/Actions/AuthAction";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Redux/Store";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const LoginSuccess = useSelector((state: RootState) => state.Login.user);
  const [data, setData] = useState<loginType>({} as loginType);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(FetchLoginUser(data));
  };
  useEffect(() => {
    if (LoginSuccess) {
      history.push("/products");
    }
  }, [LoginSuccess]);

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
