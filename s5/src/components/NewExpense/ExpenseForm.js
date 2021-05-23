import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enterTitle: '',
    enterAmount: '',
    enterDate: ''
  })

  const [isAdd, setIsAdd] = useState(false)

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
      title: userInput.enterTitle,
      amount: +userInput.enterAmount,
      date: new Date(userInput.enterDate)
    }
    props.onSaveExpenseData(expenseData)
    setIsAdd((prevIsAdd) => !prevIsAdd)
    setUserInput((prevState) => {
      return { ...prevState, enterTitle: '', enterAmount: '', enterDate: '' }
    })
  }

  const isAddHandler = () => {
    if (isAdd) {
      setUserInput((prevState) => {
        return { ...prevState, enterTitle: '', enterAmount: '', enterDate: '' }
      })
    }
    setIsAdd((prevIsAdd) => !prevIsAdd)
  }

  if (!isAdd) {
    return <button onClick={isAddHandler}>Add New Expense</button>
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
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
        <button type="button" onClick={isAddHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
