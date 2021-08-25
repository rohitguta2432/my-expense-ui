import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './AddExpense.css'
import { FcPlus } from 'react-icons/fc'

const AddExpense = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            <div className="main_container">
                <div className="expense_date form-group">
                    {/* <lable className="date">
                        Date :
                    </lable> */}
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholder="date"/>
                </div>
                <div className="category_expense">
                    {/* <label htmlFor="expense">
                        Category :
                    </label> */}
                    <select name="" id="">
                        <option value="">Select Category</option>
                        <option value="">Food</option>
                        <option value="">HouseHold</option>
                        <option value="">grociery</option>
                    </select>
                    <FcPlus className="add_category"/>
                </div>
                <div className="amount_expense">
                    {/* <label htmlFor="" className="amount">
                        Amount :
                     </label> */}
                    <input type="number" placeholder="Amount" />
                </div>
                <input type="submit" value="submit" />
            </div>
        </>
    )
}

export default AddExpense
