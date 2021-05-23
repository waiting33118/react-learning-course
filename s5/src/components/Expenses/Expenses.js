import Card from '../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'
import './Expenses.css'
import { useState } from 'react'

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  const filterByYearHandler = (year) => setSelectedYear(year)

  const filterByYearExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onFilterByYear={filterByYearHandler}
      />
      <ExpenseChart expenses={filterByYearExpenses} />
      <ExpenseList expenses={filterByYearExpenses} />
    </Card>
  )
}
export default Expenses
