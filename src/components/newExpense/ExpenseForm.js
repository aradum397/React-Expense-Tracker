import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = props => {
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    date: ''
  })
  const titleChangeHandler = e => {
    setNewExpense(newExpense => {
      return { ...newExpense, title: e.target.value }
    })
  }

  const amountChangeHandler = e => {
    setNewExpense(newExpense => {
      return { ...newExpense, amount: e.target.value }
    })
  }

  const dateChangeHandler = e => {
    setNewExpense(newExpense => {
      return { ...newExpense, date: e.target.value }
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    if (
      newExpense.title === '' ||
      newExpense.amount === '' ||
      newExpense.date === ''
    ) {
      return
    }
    const expenseData = newExpense
    props.onSaveExpense(expenseData)
    setNewExpense({
      title: '',
      amount: '',
      date: ''
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={newExpense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={newExpense.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newExpense.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.formToggle}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
