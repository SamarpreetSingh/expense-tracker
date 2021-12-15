import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [open, setOpen] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const closeHandler = (e) => {
    e.preventDefault();
    setOpen(0);
  };

  const openHandler = (e) => {
    e.preventDefault();
    setOpen(1);
  };

  return (
    <div className="expense-form">
      {open === 1 && (
        <form onSubmit={submitHandler}>
          <div className="form-inputs">
            <div className="form-control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
                required
              />
            </div>
            <div className="form-control">
              <label>Amount</label>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={enteredAmount}
                onChange={amountChangeHandler}
                required
              />
            </div>
            <div className="form-control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
                required
              />
            </div>
          </div>
          <div className="form-submit">
            <button onClick={closeHandler}>Cancel</button>
            <button>Add Expense</button>
          </div>
        </form>
      )}
      {open === 0 && (
        <div className="open-div">
          <button className="open-btn" onClick={openHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;

// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });

// const titleChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return {...prevState, enteredTitle: event.target.value};
//   });
// };
// const amountChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return {...prevState, enteredAmount: event.target.value};
//   });
// };
// const dateChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return {...prevState, enteredDate: event.target.value};
//   });
// };
