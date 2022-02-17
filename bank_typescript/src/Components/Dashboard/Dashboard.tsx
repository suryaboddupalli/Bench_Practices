import React from "react";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const history = useHistory();
  return (
    <div>
      <div className="mt-5 ">
        <div className="row mb-3 text-center">
          <div className="col-6">
            <button
              className="button "
              onClick={() => history.push("/create_account")}
            >
              Create New-Account
            </button>
          </div>
          <div className="col-6">
            <button
              className="button"
              onClick={() => history.push("/deposit-withdrawal")}
            >
              Deposit/WithDrawal
            </button>
          </div>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-6">
            <button
              className="button"
              onClick={() => history.push("/customers")}
            >
              Update/Delete Account
            </button>
          </div>
          <div className="col-6">
            <button className="button" onClick={() => history.push("/sender")}>
              Transfer
            </button>
          </div>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-6">
            <button
              className="button"
              onClick={() => history.push("/transaction")}
            >
              Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
