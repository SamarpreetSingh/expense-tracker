import React, { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 194.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Netflix",
    amount: 99,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setExpenses((prevState) => {
      return [...prevState, expenseData];
    });
  };



  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card>
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
};

export default App;

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", {}, "Expense Tracker"),
//   React.createElement(Expenses, { expenses: expenses })
// );
