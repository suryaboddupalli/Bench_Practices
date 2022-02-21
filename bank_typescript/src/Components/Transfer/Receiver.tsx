import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAccountDetails } from "../../Redux/Actions/FetchCustomersAction";
import { addReceiver } from "../../Redux/Actions/TransferAction";
import { RootState } from "../../Redux/Store";
import List from "./List";

type reciverData = {
  _id: string;
  Name: string;
  Account_Number: number;
  Balance: number;
};

function Receiver() {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Fetchcustomers.Users);
  const sender = useSelector((state: RootState) => state.Transfer.sender);
  console.log(sender);
  // const newData = data.filter((user) => user.Account_Number !== sender);
  useEffect(() => {
    dispatch(getAccountDetails());
  }, []);

  const selectReciver = (data: reciverData) => {
    console.log(data);
    dispatch(addReceiver(data));
  };

  return (
    <div>
      <h3 className="heading text-center"> Send To...</h3>
      <div className="page-box">
        <div className="row">
          <p className="col">Sl.no</p>
          <p className="col"> Number</p>
          <p className="col">Name</p>
          <p className="col">Balance</p>
        </div>
        <div className="row">
          {data &&
            data.map((customer, index) => (
              <List
                select={() => selectReciver(customer)}
                link={"transfer"}
                customer={customer}
                index={index}
              />
            ))}
        </div>
      </div>
      <br />
      <button id="button" onClick={() => history.push("/dashboard")}>
        {" "}
        Back
      </button>
    </div>
  );
}

export default Receiver;
