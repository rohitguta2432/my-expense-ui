import React from 'react'
import './Category.css'
import { FaAngleLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const Category = () => {
    const history = useHistory();
   
    return (
        <>
            <form action="">
                <div className="container_cate">
                <FaAngleLeft className="go_back" onClick={history.goBack}/>
                    <input type="text" placeholder="Category" />
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
