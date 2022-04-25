import { Stack, Typography, TextField, Button } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action";
import { loginData } from "../Redux/ActionTypes";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState<loginData>({} as loginData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    dispatch(login(data));
    navigate("/");
  };

  console.log(data);

  return (
    <div>
      <Typography variant="h4">LOGIN</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} direction="row">
          <TextField
            label="User Id"
            type="text"
            name="userId"
            variant="outlined"
            onChange={handleChange}
          />
        </Stack>
        <Stack spacing={3} direction="row">
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            onChange={handleChange}
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Login;
