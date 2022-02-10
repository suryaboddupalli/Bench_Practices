import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { data } from "../types";

function Data() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todo")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteData = (id: string) => {
    axios
      .delete(`http://localhost:8000/todo/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {data.map((data: data) => {
          return (
            <tr>
              <td>{data.Name}</td>
              <td>{data.Age}</td>
              <td>
                <button onClick={() => updateData(data._id)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteData(data._id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Data;
