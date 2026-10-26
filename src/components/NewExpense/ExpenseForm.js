import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };


  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
    enteredAmount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
    enteredDate: event.target.value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      price: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate + "T00:00:00"),
    };
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    
   })
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="enteredTitle">Title</label>
          <input
            type="text"
            id="enteredTitle"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredAmount">Amount</label>
          <input
            type="number"
            id="enteredAmount"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredDate">Date</label>
          <input
            type="date"
            id="enteredDate"
            min="2023-01-01"
            max="2024-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
