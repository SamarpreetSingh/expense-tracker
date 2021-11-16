import React from "react";
import "./ExpenseFilter.css";
import ExpenseMonth from './ExpenseMonth';

const ExpenseFilter = (props) => {


  const selectYearHandler = (event) => {
    const year = event.target.value;
    props.onChangeYear(year);
  }

  return (
    <div className="expense-filter">
      <div className="top">
        <p>Filter by Year</p>
        <select className="select-year" onChange={selectYearHandler} value={props.selectedYear}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="months">
          <ExpenseMonth month="Jan" />
          <ExpenseMonth month="Feb" />
          <ExpenseMonth month="Mar" />
          <ExpenseMonth month="Apr" />
          <ExpenseMonth month="May" />
          <ExpenseMonth month="Jun" />
          <ExpenseMonth month="Jul" />
          <ExpenseMonth month="Aug" />
          <ExpenseMonth month="Sept" />
          <ExpenseMonth month="Oct" />
          <ExpenseMonth month="Nov" />
          <ExpenseMonth month="Dec" />
      </div>
    </div>
  );
};

export default ExpenseFilter;
