import React from 'react';
import './ExpenseMonth.css';

const ExpenseMonth = (props) => {
    return (
        <div className="month">
            <div className="pipe">

            </div>
            <p>{props.month}</p>
        </div>
    );
};

export default ExpenseMonth;