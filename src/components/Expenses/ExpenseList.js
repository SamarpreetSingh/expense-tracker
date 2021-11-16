import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.list.length === 0) {
    return (
      <div className="not-found">
        <h2>No Expense Found</h2>
      </div>
    );
  }

  return (
    <ul clasName="expense-list">
      {props.list.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.title}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
