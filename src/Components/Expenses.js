import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './NewExpense/EpenseFilter'
import React, {useState} from 'react'

function Expenses (props) {

    const [filteredYear, setFilteredYear] = useState('2020')


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}onChangeFilter={filterChangeHandler}/>

           <ExpenseItem
      title={props.item[0].title}
      amount={props.item[0].amount}
      date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[1].title}
      amount={props.item[1].amount}
      date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[2].title}
      amount={props.item[2].amount}
      date={props.item[2].date}
      ></ExpenseItem>
        </Card>
    )
}

export default Expenses