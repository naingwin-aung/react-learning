import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

function Expense({ expenses }) {
  const [filterYear, setFilterYear] = useState("all");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses =
    filterYear == "all"
      ? expenses
      : expenses.filter((expenses) => {
          return expenses.date.getFullYear().toString() == filterYear;
        });

  return (
    <div>
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpenses} />
      <Card className="expense">
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
