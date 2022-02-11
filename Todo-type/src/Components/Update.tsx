import React, { ChangeEvent, useEffect, useState } from "react";
import { todo } from "../types";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [todoList, setTodoList] = useState<todo>();
  const { id } = useParams<any>();
  const [data, setData] = useState<any>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else {
      setAge(Number(e.target.value));
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/todo/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  const addData = (): void => {
    setTodoList({ Name: name, Age: age });
    console.log(todoList);
    axios
      .put(`http://localhost:8000/todo/update/${id}`, todoList)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* {data.map((details: object) => {
        console.log(details);
        return ( */}
      <>
        <label>
          Name :
          <input type="text" name="Name" onChange={handleChange} />
        </label>
        <label>
          Age :
          <input type="number" name="name" onChange={handleChange} />
        </label>
        <button onClick={addData}>Add</button>
      </>
      {/* );
      })} */}
    </div>
  );
}

export default Update;
