import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import { useState } from 'react'


const Expenses = (props) => {
  const [year, setYear] = useState('2022')
  const handleFilter = (year) => {
    setYear(year)
  }
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.split('-')[0] === year
  })
	return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} filterYear={handleFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses