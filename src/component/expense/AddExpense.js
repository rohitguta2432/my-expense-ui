import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './AddExpense.css'
import { FcPlus } from 'react-icons/fc'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { ENV } from '../environment/EnvrUrl'
import Axios from 'axios';


const AddExpense = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [category, setCategory] = useState([]);
    const history = useHistory();

    const addCategory = () => {
        history.push("/category");
    }


    useEffect(() => {
        Axios.get(ENV.URL + 'category')
            .then((response) => {
                //console.log(response.data);
                setCategory(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className="main_container">
                <FaAngleLeft className="go_back" onClick={history.goBack} />
                <div className="expense_date form-group">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="category_expense">
                    <select>
                        <option value="">Select Category</option>
                        {
                            category.map((value) => {
                                return <option key={value.id} value={value.id}>{value.name}</option>
                            })
                        }
                    </select>
                    <FcPlus className="add_category" onClick={addCategory} />
                </div>
                <div className="amount_expense">

                    <input type="number" placeholder="Amount" />
                </div>
                <input type="submit" value="submit" className="expense_submit" />
            </div>
        </>
    )
}

export default AddExpense
