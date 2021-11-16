import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState("2021");

  const changeYearHandler = (year) => {
    setExpenseYear(year);
  };

  const filterExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expenseYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={expenseYear}
        onChangeYear={changeYearHandler}
      />
      <ExpenseList list={filterExpenses} />
    </Card>
  );
};

export default Expenses;
