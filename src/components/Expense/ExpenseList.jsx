import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ items }) => {
  if (items.length == 0) {
    return <h2 className="expense-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={index}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
