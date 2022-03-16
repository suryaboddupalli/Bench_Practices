import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../Redux/Store";
import { getUsers, getUser } from "../Redux/Action";
import axios from "axios";

function Transaction() {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.UsersReducer.Users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const DeleteUser = (id: any) => {
    axios
      .delete(`http://localhost:8000/userData/delete/${id}`)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="page">
      <table className="table">
        <thead>
          <tr>
            <th className="cols">Id</th>
            <th className="cols">Name</th>
            <th className="cols">Email</th>
            <th className="cols" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user: any) => (
              <tr>
                <td className="cols">{user._id}</td>
                <td className="cols">{user.Name}</td>
                <td className="cols">{user.Email}</td>
                <td className="cols">
                  <button onClick={() => dispatch(getUser(user._id))}>
                    Update
                  </button>
                </td>
                <td className="cols">
                  <button onClick={() => DeleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
