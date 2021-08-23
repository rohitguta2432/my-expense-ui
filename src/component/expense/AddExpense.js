import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './AddExpense.css'
const AddExpense = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            <div className="main_container">
                <div className="expense_date">
                    <lable className="date">
                        Date :
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </lable>
                </div>
                <div className="category_expense">
                    <label htmlFor="expense">
                        Category :
                        <select name="" id="">
                            <option value="">Food</option>
                            <option value="">HouseHold</option>
                            <option value="">grociery</option>
                        </select>
                    </label>
                </div>
                <div className="amount_expense">
                    <label htmlFor="" className="amount">
                        Amount :
                        <input type="number" placeholder="Amount" />
                    </label>
                </div>
                <input type="submit" value="submit" />
            </div>
        </>
    )
}

export default AddExpense
