import React from "react";
import "./Chart.css";

import Chartbar from "./Chartbar";

const Chart = (props) => {
  const datapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    datapoints[expenseMonth].value += expense.amount;
  }

  const datapointvals = datapoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...datapointvals);

  return (
    <div className="chart">
      {datapoints.map((datapoint) => (
        <Chartbar
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
