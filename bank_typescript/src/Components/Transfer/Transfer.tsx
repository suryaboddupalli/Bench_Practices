import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateBalances } from "../../Redux/Actions/TransferAction";
import { RootState } from "../../Redux/Store";
import { addTransaction } from "../../Redux/Actions/TransactionAction";

function Transfer() {
  const history = useHistory();
  const sender = useSelector((state: RootState) => state.Transfer.sender);
  const receiver = useSelector((state: RootState) => state.Transfer.receiver);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0);
  const [amountError, setAmountError] = useState("");
  const amountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const transfer = () => {
    if (amount > sender.Balance) {
      setAmountError("Amount is Higher than Sender Balance");
    } else {
      const senderData = {
        ...sender,
        Balance: sender.Balance - amount,
      };
      const receiverData = {
        ...receiver,
        Balance: parseInt(receiver.Balance) + amount,
      };

      dispatch(updateBalances(senderData, receiverData));
      const transferData = {
        TransactionType: "Transfer",
        Sender: senderData.Name,
        Receiver: receiverData.Name,
        Amount: amount,
        Status: "success",
        _id: "",
        Name: "",
        createdAt: "",
      };

      dispatch(addTransaction(transferData));

      history.push("/dashBoard");
      alert("Transaction Successful");
    }
  };

  return (
    <div id="transfer">
      <div className="row customer">
        <label className="labels col-3">Sender</label>
        <br />
        <input
          className="col-6"
          value={"Account Number :" + sender.Account_Number}
          disabled
        />
        <input
          className="col-3"
          value={"Balance :" + sender.Balance}
          disabled
        />
      </div>
      <br />
      <div className="row customer">
        <label className="labels col-3">Reciver</label>
        <br />
        <input
          className="col-6"
          value={"Account Number :" + receiver.Account_Number}
          disabled
        />
        <input
          className="col-3"
          value={"Balance :" + receiver.Balance}
          disabled
        />
      </div>
      <br />
      {amountError && <div>{amountError}</div>}
      <div className="row amount">
        <label className="labels col-5">Amount</label>
        <br />
        <input
          className="col-7"
          type="number"
          name="amount"
          onChange={amountChange}
        />
        <br />
      </div>
      <br />
      <div id="btn">
        <button className="btn btn-success" onClick={transfer}>
          Transfer
        </button>
        <button className="btn btn-danger" onClick={() => history.push("/")}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default Transfer;
