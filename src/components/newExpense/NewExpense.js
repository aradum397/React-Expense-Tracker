import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
	const saveExpenseData = (expenseData) => {
		const newExpense = {
			id: Date.now().toString(),
			...expenseData
		}
		props.onAddExpense(newExpense)
	}

	const [isOpen, setIsOpen] = useState(false)

	const formToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
    <div className='new-expense'>
      {!isOpen && <button onClick={formToggle}>Add New Expense</button>}
      {isOpen && (
        <ExpenseForm onSaveExpense={saveExpenseData} formToggle={formToggle} />
      )}
    </div>
  )
}

export default NewExpense