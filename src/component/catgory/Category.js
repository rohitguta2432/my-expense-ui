import React, { useState } from 'react'
import './Category.css'
import { FaAngleLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import { ENV } from '../environment/EnvrUrl'

const Category = () => {
    const history = useHistory();
    const [categoryObj, setCategoryObj] = useState({
        name: ""
    });

    const handleInput = (e) => {
        setCategoryObj({ ...categoryObj, [e.target.name]: e.target.value });
    }

    const createCategory = (e) => {
        e.preventDefault();

        console.log(categoryObj);

        Axios.post(ENV.URL + 'category', categoryObj)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
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
            </form>
        </>
    )
}

export default Category
