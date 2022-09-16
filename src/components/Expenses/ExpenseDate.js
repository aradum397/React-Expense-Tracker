import './ExpenseDate.css'

const ExpenseDate = (props) => {
	return (
    <div className='expense-date'>
      <div className='expense-date__month'>{props.date.split('-')[1]}</div>
      <div className='expense-date__day'>{props.date.split('-')[2]}</div>
      <div className='expense-date__year'>{props.date.split('-')[0]}</div>
    </div>
  )
}

export default ExpenseDate