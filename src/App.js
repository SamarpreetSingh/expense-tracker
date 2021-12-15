import React, { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import DUMMY_DATA from "./data";

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
