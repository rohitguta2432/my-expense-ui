import React, { useState, useEffect, Fragment } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './AddExpense.css'
import { FcPlus } from 'react-icons/fc'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { ENV } from '../environment/EnvrUrl'
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import { RiEdit2Fill } from 'react-icons/ri'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddExpense = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [category, setCategory] = useState([]);
    const [open, setOpen] = useState(false)
    const [expense, setExpense] = useState({
        expenseId: "",
        expenseDate: "",
        amount: "",
        categoryId: ""
    });
    const [categoryId, setCategoryId] = useState("");
    const [message, setMessage] = useState();

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
        setOpen(true)
        if (expense.expenseId === '') {
            setMessage("Expense Created successFully !")
        } else {
            setMessage("Expense Updated successFully !")
        }

    }

    useEffect(() => {
        Axios.get(ENV.URL + 'category')
            .then((response) => {
                setCategory(response.data);

            }).catch((error) => {
                console.log(error);
            })
    }, []);

    // fetch by id expense
    useEffect(() => {
        Axios.get(ENV.URL + "expense/" + id)
            .then((res) => {
                setExpense(res.data)
                setCategoryId(res.data.categoryId)
                setStartDate(res.data.expenseDate)
            }).catch((res) => {
                console.log(res);
            })
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <form action="" onSubmit={createExpense}>

            <div className="message">
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal:'center'}}>
                            <Alert onClose={handleClose} severity="success">
                                {message}
                            </Alert>
                        </Snackbar>
                    </div>
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
                                        value={value.categoryId} onChange={handleInput} selected={categoryId == value.categoryId}>{value.name}

                                    </option>
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
