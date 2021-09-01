import React, { useEffect, useState } from 'react'
import './Category.css'
import { FaAngleLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import { ENV } from '../environment/EnvrUrl'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri';

const Category = () => {
    const history = useHistory();
    const [categoryObj, setCategoryObj] = useState({
        categoryId: "",
        name: ""
    });

    const [categoryArr, setCategoryArr] = useState([]);

    const handleInput = (e) => {
        setCategoryObj({ ...categoryObj, [e.target.name]: e.target.value });
    }

    const createCategory = (e) => {
        e.preventDefault();

        console.log(categoryObj);

        Axios.post(ENV.URL + 'category', categoryObj)
            .then((res) => {
                console.log(res);
                fetchCategory()
            }).catch((err) => {
                console.log(err);
            })

    }


    const fetchCategory = () => {
        Axios.get(ENV.URL + 'category')
            .then((res) => {
                console.log(res)
                setCategoryArr(res.data)
            }).catch((res) => {
                console.log(res)
            })
    }

    useEffect(() => {
        Axios.get(ENV.URL + 'category')
            .then((res) => {
                console.log(res)
                setCategoryArr(res.data)
            }).catch((res) => {
                console.log(res)
            })
    }, [])

    const editCategory = (id) => {
        console.log('edit')
        Axios.get(ENV.URL + 'category/' + id)
            .then((response) => {
                console.log(response)
                setCategoryObj(response.data)
            }).catch((response) => {
                console.log(response)
            })
    }

    const deleteCategroy = (id) => {
        console.log('delete')
        Axios.delete(ENV.URL + 'category/' + id)
            .then((res) => {
                fetchCategory();
            }).catch((res) => {
                console.log(res)
            })
    }

    return (
        <>
            <form action="" onSubmit={createCategory}>
                <div className="container_cate">
                    <FaAngleLeft className="go_back" onClick={history.goBack} />
                    <input type="text" placeholder="Category" id="name" name="name" value={categoryObj.name}
                        onChange={handleInput} />
                    <hr />
                    <div className="form_submit">
                        <input type="submit" value="submit" className="category_submit" />
                    </div>

                </div>
                <div className="table_category">

                    <table className="table_cate">
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
                </div>
            </form>


        </>
    )
}

export default Category
