import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAccount } from "../../Redux/Actions/FetchCustomerAction";
import { updateBalance } from "../../Redux/Actions/BankingAction";
import { RootState } from "../../Redux/Store";
import { addTransaction } from "../../Redux/Actions/TransactionAction";

type updateBal = {
  Balance: number;
};

function Withdrawal() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [initialAmount, setInitialAmount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [withdrawal, setWithdrawal] = useState<number>(0);
  const [update, setUpdate] = useState<updateBal>({} as updateBal);
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) => state.Fetchcustomer.User);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWithdrawal(parseInt(e.target.value));
  };
  useEffect(() => {
    dispatch(getAccount(id));
  }, []);

  useEffect(() => {
    setAmount(initialAmount - withdrawal);
  }, [withdrawal]);

  useEffect(() => {
    setUpdate({ Balance: amount });
  }, [amount]);

  useEffect(() => {
    if (user) {
      console.log(user);
      setInitialAmount(user.Balance);
    }
  }, [user]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(update);
    dispatch(updateBalance(update, id));
    const depositData = {
      Name: user.Name,
      Status: "Success",
      Sender: "",
      Receiver: "",
      TransactionType: "withdrawal",
      Amount: withdrawal,
      _id: "",
      createdAt: "",
    };
    dispatch(addTransaction(depositData));
  };
  return (
    <div className="mt-5 text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="text-box"
          placeholder="amount..."
          name="Withdrawal"
          onChange={handleChange}
        />
        <button className="btn btn-primary">Withdrawal</button>
      </form>
      <br />
      <button id="button" onClick={() => history.push("/dashboard")}>
        back
      </button>
    </div>
  );
}

export default Withdrawal;
