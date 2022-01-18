import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  // const [enteredYear, setEnteredYear] = useState(""); // useState yani State ile bilgileri kaydediyoruz

  function yearChangeHandler(event) {
    // setEnteredYear(event.target.value);
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
}
export default ExpenseFilter;
