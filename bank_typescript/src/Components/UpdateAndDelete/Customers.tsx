import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAccountDetails } from "../../Redux/Actions/FetchCustomersAction";
import { RootState } from "../../Redux/Store";

function Customers() {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Fetchcustomers.Users);
  const [deleteRes, setDeleteRes] = useState();

  useEffect(() => {
    dispatch(getAccountDetails());
  }, []);

  const deletUser = (id: string) => {
    axios
      .delete(`http://localhost:8000/customer/delete/${id}`)
      .then((res) => {
        setDeleteRes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <table className="table">
        {deleteRes && <div className="text-success">{deleteRes}</div>}
        <thead>
          <tr>
            <th className="cols">Sl.no</th>
            <th className="cols">Account Number</th>
            <th className="cols">Name</th>
            <th className="cols text-center" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => (
            <tr key={customer._id}>
              <td className="cols">{index + 1}</td>
              <td className="cols">{customer.Account_Number}</td>
              <td className="cols">{customer.Name}</td>
              <td className="cols">
                <button
                  className="btn btn-success"
                  onClick={() =>
                    history.push(`/customer/update/${customer._id}`)
                  }
                >
                  Update
                </button>
              </td>
              <td className="cols">
                <button
                  className="btn btn-danger"
                  onClick={() => deletUser(customer._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className=" btn btn-secondary"
        onClick={() => history.push("/dashboard")}
      >
        {" "}
        Back
      </button>
    </div>
  );
}

export default Customers;
