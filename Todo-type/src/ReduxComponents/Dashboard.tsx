import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdrawal } from "../Redux/actionsCreator";

function Dashboard() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state);
  const [amount, setAmount] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
    console.log(amount);
  };

  const depositClick = (): void => {
    console.log("clicked");
    dispatch(deposit(amount));
    console.log(amount);
  };

  const withDrawal = (): void => {
    console.log("clicked");
    dispatch(withdrawal(amount));
  };

  return (
    <div>
      <h2>{balance}</h2>
      <input type="number" name="amount" onChange={handleChange} />
      <button onClick={() => depositClick()}>Deposit</button>
      <button onClick={() => withDrawal()}>withdrawal</button>
    </div>
  );
}

export default Dashboard;
