import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAccountDetails } from "../../Redux/Actions/FetchCustomersAction";
import { addSender } from "../../Redux/Actions/TransferAction";
import { RootState } from "../../Redux/Store";
import List from "../Transfer/List";

type senderData = {
  _id: string;
  Name: string;
  Account_Number: number;
  Balance: number;
};

function Sender() {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.Fetchcustomers.Users);

  console.log(data);

  useEffect(() => {
    dispatch(getAccountDetails());
  }, []);

  const selectSender = (data: senderData) => {
    dispatch(addSender(data));
    console.log(data);
  };

  return (
    <div>
      <h2 className=" heading text-center">Send from...</h2>
      <div className="page-box">
        <div className="row">
          <p className="col ">Sl.no</p>
          <p className="col">Account Number</p>
          <p className="col">Name</p>
          <p className="col">Balance</p>
        </div>
        <div>
          {data &&
            data.map(
              (customer, index) => (
                console.log(customer),
                (
                  <List
                    select={() => selectSender(customer)}
                    link={"receiver"}
                    customer={customer}
                    index={index}
                  />
                )
              )
            )}
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

export default Sender;
