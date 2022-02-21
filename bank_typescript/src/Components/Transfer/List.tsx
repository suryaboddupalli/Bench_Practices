import React from "react";
import { NavLink } from "react-router-dom";

type customer = {
  Name: string;
  Account_Number: number;
  Balance: number;
};

type data = {
  customer: customer;
  index: number;
  select: () => void;
  link: string;
};

function SenderList(props: data) {
  return (
    <NavLink to={props.link} onClick={props.select} className="row">
      <p className="col">{props.index + 1}</p>
      <p className="col">{props.customer.Account_Number}</p>
      <p className="col">{props.customer.Name}</p>
      <p className="col">{props.customer.Balance}</p>
    </NavLink>
  );
}

export default SenderList;
