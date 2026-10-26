
import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (const expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].expenseValue += Number(expense.price);
  }

  const maxChartValue = Math.max(
    ...chartData.map((data) => data.expenseValue),
    0
  );

  return (
    <div className="chart">
      {chartData.map((monthData) => (
        <ChartBar
          key={monthData.expenseMonth}
          label={monthData.expenseMonth}
          value={monthData.expenseValue}
          maxValue={maxChartValue}
        />
      ))}
    </div>
  );
};

export default Chart;
