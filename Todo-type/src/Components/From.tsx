import React, { ChangeEvent, useState } from "react";
import { todo } from "../types";
import axios, { AxiosResponse } from "axios";

function From() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [todoList, setTodoList] = useState<todo>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else {
      setAge(Number(e.target.value));
    }
  };
  const addData = (): void => {
    setTodoList({ Name: name, Age: age });
    console.log(todoList);
    axios
      .post("http://localhost:8000/todo/add", todoList)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <label>
        Name : <input type="text" name="Name" onChange={handleChange} />
      </label>
      <label>
        Age : <input type="number" name="Age" onChange={handleChange} />
      </label>
      <button onClick={addData}>Add</button>
    </div>
  );
}

export default From;
