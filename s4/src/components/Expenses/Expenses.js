import ExpenseItem from './ExpenseItem'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import Card from '../UI/Card'
import './Expenses.css'
import { useState } from 'react'

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  const filterByYearHandler = (year) => setSelectedYear(year)

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onFilterByYear={filterByYearHandler}
      />
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      />
    </Card>
  )
}
export default Expenses
