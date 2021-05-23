import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
