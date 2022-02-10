import React from "react";
import { props } from "../types";

function TodoList({ dataList, deleteTodo }: props) {
  console.log(dataList);
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
        <tr>
          <td>{dataList.Name}</td>
          <td>{dataList.Age}</td>
          <td>
            <button
              onClick={() => {
                deleteTodo(dataList.Name);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TodoList;
