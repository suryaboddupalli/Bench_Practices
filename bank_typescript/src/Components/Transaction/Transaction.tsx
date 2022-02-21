import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../Redux/Actions/TransactionAction";
import TransactionList from "./TransactionList";
import { RootState } from "../../Redux/Store";

function TransactionHistory() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: RootState) => state.Transaction.transactions
  );

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

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <div>
      <h3 className="text-center heading">Transaction History</h3>
      <div className="row history">
        {data &&
          data.map((details: transactionData) => (
            <TransactionList data={details} />
          ))}
      </div>
    </div>
  );
}

export default TransactionHistory;
