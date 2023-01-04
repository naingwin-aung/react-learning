import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 799.19,
    date: new Date(2023, 5, 12),
  },
  {
    id: 2,
    title: "Shopping",
    amount: 299,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
