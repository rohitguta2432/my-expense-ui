import React, { useState } from 'react'
import './Navbar.css'
import { FcPlus } from 'react-icons/fc'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useHistory} from 'react-router-dom'
import {BiLogOut} from 'react-icons/bi'


const Navbar = () => {
    const [value, onChange] = useState(new Date());
    const history = useHistory();
    const addExpense = () =>{
        console.log('add expense');
        history.push("/expense");
    }
    const onLogout = () =>{
            history.push('/');
    }

    return (
        <>
            <nav>
                <ul className="list">
                    <li className="item1">
                    </li>
                    <li className="add_item">
                        <div className="add_expense_parent">
                        <FcPlus className="add_icon" onClick={addExpense}/>
                        </div>
                        <div className="logout_parent" onClick={onLogout}>
                        <BiLogOut className="logout_icon"/>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
