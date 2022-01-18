import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className=" expenses-list__fallback">No Expenses Found </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((props) => (
        <ExpenseItems
          key={props.id}
          title={props.title}
          amount={props.amount}
          date={props.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
