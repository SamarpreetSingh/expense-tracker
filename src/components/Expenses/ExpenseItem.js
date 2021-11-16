import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li className="item">
      <ExpenseDate date={props.date} />
      <div className="item-description">
        <h2 className="item-name">{props.title}</h2>
        <div className="item-price">$ {props.amount}</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
