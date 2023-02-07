import './ExpenseAmount.css'

function ExpenseAmount(props) {
  const amount = props.amount;

  return <div className="expenses">${amount}</div>;
}

export default ExpenseAmount;
