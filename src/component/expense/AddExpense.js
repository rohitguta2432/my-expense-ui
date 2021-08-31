import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './AddExpense.css'
import { FcPlus } from 'react-icons/fc'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { ENV } from '../environment/EnvrUrl'
import Axios from 'axios';
import { useParams } from 'react-router-dom'

const AddExpense = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [category, setCategory] = useState([]);
    const [expense, setExpense] = useState({
        expenseDate: "",
        amount: "",
        categoryId: ""
    });
    const history = useHistory();
    const { id } = useParams();

    const addCategory = () => {
        history.push("/category");
    }

    const handleInput = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value, "expenseDate": startDate })
    }

    const createExpense = (e) => {
        e.preventDefault();

        Axios.post(ENV.URL + 'expense', expense)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        Axios.get(ENV.URL + 'category')
            .then((response) => {
                setCategory(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        Axios.get(ENV.URL + "expense/" + id)
            .then((res) => {
                setExpense(res.data)
            }).catch((res) => {
                console.log(res);
            })
    }, [])

    console.log(expense);
    return (
        <>
            <form action="" onSubmit={createExpense}>
                <div className="main_container">
                    <FaAngleLeft className="go_back" onClick={history.goBack} />
                    <div className="expense_date form-group">
                        <DatePicker selected={startDate} value={startDate} id="expenseDate" name="expenseDate"
                            onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="category_expense">
                        <select id="categoryId" name="categoryId" onChange={handleInput}>
                            <option value="">Select Category</option>
                            {
                                category.map((value) => {
                                    return <option key={value.categoryId} id="categoryId" name="categoryId"
                                        value={value.categoryId} onChange={handleInput}>{value.name}</option>
                                })
                            }
                        </select>
                        <FcPlus className="add_category" onClick={addCategory} />
                    </div>
                    <div className="amount_expense">
                        <input type="number" placeholder="Amount" id="amount" name="amount" value={expense.amount} onChange={handleInput} />
                    </div>
                    <input type="submit" value="submit" className="expense_submit" />
                </div>
            </form>
        </>
    )
}

export default AddExpense
