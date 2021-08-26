import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './AddExpense.css'
import { FcPlus } from 'react-icons/fc'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

const AddExpense = () => {
    const [startDate, setStartDate] = useState(new Date())
    const history = useHistory();
    const addCategory = () => {
        console.log('add category');
        history.push("/category");
    }
    return (
        <>
            <div className="main_container">
            <FaAngleLeft className="go_back" onClick={history.goBack}/>
                <div className="expense_date form-group">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="category_expense">
                    <select name="" id="">
                        <option value="">Select Category</option>
                        <option value="">Food</option>
                        <option value="">HouseHold</option>
                        <option value="">grociery</option>
                    </select>
                    <FcPlus className="add_category" onClick={addCategory} />
                </div>
                <div className="amount_expense">

                    <input type="number" placeholder="Amount" />
                </div>
                <input type="submit" value="submit" className="expense_submit"/>
            </div>
        </>
    )
}

export default AddExpense
