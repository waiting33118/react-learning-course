import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enterTitle: '',
    enterAmount: '',
    enterDate: ''
  })

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enterTitle: e.target.value }
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enterAmount: e.target.value }
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enterDate: e.target.value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      ...userInput,
      enterDate: new Date(userInput.enterDate)
    }
    props.onSaveExpenseData(expenseData)
    setUserInput((prevState) => {
      return { ...prevState, enterTitle: '', enterAmount: '', enterDate: '' }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
