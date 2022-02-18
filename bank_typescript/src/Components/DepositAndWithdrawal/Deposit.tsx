import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAccount } from "../../Redux/Actions/FetchCustomerAction";
import { updateBalance } from "../../Redux/Actions/BankingAction";
import { RootState } from "../../Redux/Store";

type updateBal = {
  Balance: number;
  id: string;
};

function Deposit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [initialAmount, setInitialAmount] = useState<number>();
  const [amount, setAmount] = useState<any>();
  const [deposit, setDeposit] = useState<number>();
  const [update, setUpdate] = useState<updateBal>({} as updateBal);
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) => state.Fetchcustomer.User);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeposit(parseInt(e.target.value));
  };

  useEffect(() => {
    dispatch(getAccount(id));
  }, []);

  useEffect(() => {
    const add = (a?: number, b?: number) => {
      return a + b;
    };
    const total = add(deposit, initialAmount);
    setAmount(total);
  }, [deposit]);

  useEffect(() => {
    setUpdate(amount);
  }, [amount]);

  useEffect(() => {
    console.log(user.Balance);
    setInitialAmount(user.Balance);
  }, [user]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(deposit);
    // console.log(update);
    // dispatch(updateBalance(update, id));
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
