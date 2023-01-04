import { useState } from "react";
import ExpenseFormHide from "../Expense/ExpenseFormHide";
import "./ExpenseForm.css";
function ExpenseForm({ onSaveExpenseData }) {
  const [hide, setHide] = useState(true);

  const saveData = (expenseData) => {
    onSaveExpenseData(expenseData);
  };

  const hideForm = () => {
    setHide(!hide);
  };

  return (
    <ExpenseFormHide
      hide={hide}
      clickHandlerHide={hideForm}
      onSaveExpenseData={saveData}
    />
  );
}
export default ExpenseForm;
