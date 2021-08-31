import React, { useEffect, useMemo, useState } from 'react'
import './Dashboardtable.css'
import Axios from 'axios'
import { ENV } from '../environment/EnvrUrl'
import { useHistory } from 'react-router-dom'

const Dashboardtable = () => {
    const [expense, setExpense] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Axios.get(ENV.URL + 'expense')
            .then((response) => {
                setExpense(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const editExpense = (id) => {
        console.log('open ' + id);
        history.push("/expense/" + id)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    expense.map((value) => {
                        return (<tr key={value.expenseId} onClick={() => editExpense(value.expenseId)}>
                            <td>{new Date(value.expenseDate).toDateString()}</td>
                            <td>{value.name}</td>
                            <td>{value.amount}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    )
}

export default Dashboardtable
