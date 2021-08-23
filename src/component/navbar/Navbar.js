import React, { useState } from 'react'
import './Navbar.css'
import { FcPlus } from 'react-icons/fc'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useHistory} from 'react-router-dom'


const Navbar = () => {
    const [value, onChange] = useState(new Date());
    const history = useHistory();
    const addExpense = () =>{
        console.log('add expense');
        history.push("/expense");
    }
    return (
        <>
            <nav>
                <ul className="list">
                    <li className="item1">
                    </li>
                    <li className="add_item">
                        <FcPlus className="add_icon" onClick={addExpense}/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
