import { useState } from "react";

function ExpenseFormHide({ hide, clickHandlerHide, onSaveExpenseData }) {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        amount: +event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setNewExpense((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = { ...newExpense, date: new Date(newExpense.date) };
    onSaveExpenseData(expenseData);
    setNewExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  const hideForm = () => {
    clickHandlerHide();
  };

  if (hide) {
    return (
      <h2 className="expense-list__fallback">
        <button className="add_expense" onClick={hideForm}>
          Add Expense
        </button>
      </h2>
    );
  }

  return (
    <form onSubmit={submitHandler} className="expense_form">
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={newExpense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newExpense.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            value={newExpense.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideForm}>Cancle</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseFormHide;
