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

type balance = {
  Balance: number;
};

function Withdrawal() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [initialAmount, setInitialAmount] = useState<balance>();
  const [amount, setAmount] = useState<any>();
  const [withdrawal, setWithdrawal] = useState<number>();
  const [update, setUpdate] = useState<updateBal>({} as updateBal);
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) => state);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWithdrawal(parseInt(e.target.value));
  };
  useEffect(() => {
    dispatch(getAccount(id));
  }, []);

  useEffect(() => {
    const add = (a: any, b: any) => {
      return a - b;
    };
    const total = add(initialAmount, withdrawal);
    setAmount(total);
  }, [withdrawal]);

  useEffect(() => {
    setUpdate(amount);
  }, [amount]);

  useEffect(() => {
    if (user) {
      console.log(user);
      // setInitialAmount(user);
    }
  }, [user]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(update);
    dispatch(updateBalance(update, id));
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
