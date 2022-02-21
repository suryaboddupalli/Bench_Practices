import React from "react";

type transactionData = {
  _id: string;
  Name: string;
  TransactionType: string;
  Sender: string;
  Receiver: string;
  Amount: number;
  Status: string;
  createdAt: string;
};

type transaction = {
  data: transactionData;
};

function TransactionList(props: transaction) {
  return (
    <div className="card " key={props.data._id}>
      <h5 className="card-title">{props.data.TransactionType}</h5>
      <h6 className="card-subtitle mb-2 position-absolute transfer">
        {props.data.Name}
      </h6>
      <h6 className="card-subtitle mb-2 position-absolute transfer">
        {props.data.Sender}&nbsp;&nbsp;&nbsp; &nbsp;{props.data.Receiver}
      </h6>
      <p>{props.data.Amount}</p>
      <p className="position-absolute status">{props.data.Status}</p>
      <p className="time">{props.data.createdAt}</p>
    </div>
  );
}

export default TransactionList;
