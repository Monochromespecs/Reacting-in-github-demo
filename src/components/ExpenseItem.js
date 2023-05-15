import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//create an expense item function
// let the function be accessible in other cmps
function ExpenseItem(props) {
    //create 3 constants (a date, a string, and an integer) that allow for semi-dynamic data
    // const expenseDate = new Date(2023, 4, 26);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 165.39;

    //create a variable that you can reference in your JSX code to keep 
    //your JSX code lean and clean, easier to read

    //create 3 helper constants

  //return
  return (
    //output the dynamic data here
    //remember that date objects can't be output normally
    //utilize dynamic placeholders
    <div className="expense-item">
      <ExpenseDate date={props.date} /> {/* */}
      <div className="expense-item__description">
        
        <h2>{props.title}</h2>
        
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  ); // can have only one root element per JSX, i.e., "div"
}

export default ExpenseItem;
