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

function Practice() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [practice, setPractice] = useState<number>();
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const user = useSelector((state: RootState) =>
    console.log(state.Fetchcustomer.User)
  );
  console.log(user);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPractice(parseInt(e.target.value));
  };
  useEffect(() => {
    dispatch(getAccount(id));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(practice);
  };
  return (
    <div className="mt-5 text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="text-box"
          placeholder="amount..."
          name="Practice"
          onChange={handleChange}
        />
        <button className="btn btn-primary">Practice</button>
      </form>
      <br />
      <button id="button" onClick={() => history.push("/dashboard")}>
        back
      </button>
    </div>
  );
}

export default Practice;
