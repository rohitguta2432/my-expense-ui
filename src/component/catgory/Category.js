import React, { useEffect, useState } from 'react'
import './Category.css'
import { FaAngleLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import { ENV } from '../environment/EnvrUrl'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri';
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Category = () => {
    const history = useHistory();
    const [categoryObj, setCategoryObj] = useState({
        categoryId: "",
        name: ""
    });
    const token = localStorage.getItem('token');
    const [categoryArr, setCategoryArr] = useState([]);
    const [message, setMessage] = useState();
    const [deleteMessage, setDeleteMessage] = useState();
    const [open, setOpen] = useState(false)
    const [errorOpen, setErrorOpen] = useState(false)
    const handleInput = (e) => {
        setCategoryObj({ ...categoryObj, [e.target.name]: e.target.value });
    }

    const createCategory = (e) => {
        e.preventDefault();

        if (categoryObj.name !== '') {
            console.log(categoryObj)
            Axios.post(ENV.URL + 'category', categoryObj, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    fetchCategory()
                }).catch((err) => {
                    console.log(err);
                })
            setOpen(true)
            if (categoryObj.categoryId === '') {
                setMessage("Category Created Successfully!")
            } else {
                setMessage("Category Updated Successfully!")
            }
        }
    }


    const fetchCategory = () => {
        Axios.get(ENV.URL + 'category', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setCategoryArr(res.data)
            }).catch((res) => {
                console.log(res)
            })
    }

    useEffect(() => {
        Axios.get(ENV.URL + 'category', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setCategoryArr(res.data)
            }).catch((res) => {
                console.log(res)
            })
    }, [])

    const editCategory = (id) => {
        Axios.get(ENV.URL + 'category/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setCategoryObj(response.data)
            }).catch((response) => {
                console.log(response)
            })

    }

    const deleteCategroy = (id) => {
        Axios.delete(ENV.URL + 'category/' + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                fetchCategory();
            }).catch((res) => {
                console.log(res)
            })
        setErrorOpen(true)
        setDeleteMessage("Category Deleted Successfully!")
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setErrorOpen(false);
    };
    return (
        <>
        
        <div className="parent_category">
            <form action="" onSubmit={createCategory}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="success">
                        {message}
                    </Alert>
                </Snackbar>
                <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="error">
                        {deleteMessage}
                    </Alert>
                </Snackbar>
                <div className="container_cate">
                    <FaAngleLeft className="go_back" onClick={history.goBack} />

                    <div className="category_name">
                    <input type="text" placeholder="Category" id="name" name="name" value={categoryObj.name}
                        onChange={handleInput} />
                    </div>
                     <hr />
                    <div className="form_submit">
                        <input type="submit" value="submit" className="category_submit" />
                    </div>
                    {/* <div className="table_category"> */}

                    <table className="home_table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryArr.map((value) => {
                                    return (<tr key={value.categoryId}>
                                        <td className="td_cat">{value.name}</td>
                                        <td> <RiEdit2Line className="edit_cat" onClick={() => editCategory(value.categoryId)} />
                                            <RiDeleteBin5Line className="delete_cat" onClick={() => deleteCategroy(value.categoryId)} />
                                        </td>
                                    </tr>)
                                })
                            }

                        </tbody>
                    </table>
                {/* </div> */}
                </div>
                


            </form>

            </div>
        </>
    )
}

export default Category
