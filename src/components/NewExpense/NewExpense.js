import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setisEditing] = useState();

  const startEditingHandler = () => {
    setisEditing(true);
  };
  // startEditingHandler i Add new Expenses butonu tiklandiginda startEditingHandler in calismasi icin yaptik

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  function saveExpenseDateHandler(enteredExpenseData) {
    // asagida ki expenseData Expenseform daki expense Datayi cagiriyoruz
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expenses </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
