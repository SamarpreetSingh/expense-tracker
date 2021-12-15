import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectYearHandler = (event) => {
    const year = event.target.value;
    props.onChangeYear(year);
  };

  return (
    <div className="expense-filter">
      <div className="top">
        <p>Filter by Year</p>
        <select
          className="select-year"
          onChange={selectYearHandler}
          value={props.selectedYear}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
