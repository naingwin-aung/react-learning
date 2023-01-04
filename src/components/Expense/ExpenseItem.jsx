import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem({ title, date, amount }) {
  // const [changeTitle, setChangeTitle] = useState(title);
  // const [toggle, setToggle] = useState(true);

  // const clickHandler = () => {
  //   if (toggle) {
  //     setChangeTitle("Updated");
  //     setToggle(false);
  //   } else {
  //     setChangeTitle(title);
  //     setToggle(true);
  //   }
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
