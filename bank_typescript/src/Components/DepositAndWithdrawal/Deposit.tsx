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

function Deposit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [initialAmount, setInitialAmount] = useState<string>("");
  const [amount, setAmount] = useState<any>();
  const [deposit, setDeposit] = useState<number>(0);
  const [update, setUpdate] = useState<updateBal>({} as updateBal);
  const { id } = useParams<{ id: string }>();
  const userdetails = useSelector(
    (state: RootState) => state.Fetchcustomer.User
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeposit(parseInt(e.target.value));
  };

  useEffect(() => {
    dispatch(getAccount(id));
  }, []);

  useEffect(() => {
    setAmount(parseInt(initialAmount) + deposit);
  }, [deposit]);

  useEffect(() => {
    setUpdate({ Balance: amount });
  }, [amount]);

  useEffect(() => {
    console.log(userdetails.Balance);
    setInitialAmount(userdetails.Balance.toString());
  }, [userdetails.Balance]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(deposit);
    // console.log(id);
    console.log(update);
    dispatch(updateBalance(update, id));
    const depositData = {
      Name: userdetails.Name,
      Status: "Success",
      Sender: "",
      Receiver: "",
      TransactionType: "deposit",
      Amount: deposit,
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
          name="deposit"
          onChange={handleChange}
        />
        <button className="btn btn-primary">Deposit</button>
      </form>
      <br />
      <button id="button" onClick={() => history.push("/dashboard")}>
        back
      </button>
    </div>
  );
}

export default Deposit;
