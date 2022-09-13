import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';



function ExpenseItem(props) {

   // const expenseDate = new Date(2022, 8, 12);
   // const expenseTitle = 'Car Insurance'; 
   // const expenseAmount = 1200;
   
   return (
      <Card className='expense-item'>
         <ExpenseDate date={props.date}></ExpenseDate>

         <div className='expense-item__description'>
                  <h2>{props.title}</h2>
         </div>

         <div className='expense-item__price'>INR {props.amount} /-</div>

      </Card>
   );
}

export default ExpenseItem;

