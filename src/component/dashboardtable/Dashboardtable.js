import React, { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table';
import COLUMNS from './Column'
import './Dashboardtable.css'
import Axios from 'axios'
import { ENV } from '../environment/EnvrUrl'

const Dashboardtable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const [expense, setExpense] = useState([]);

    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                col3: 'hi'
            },
            {
                col1: 'react-table',
                col2: 'rocks',
                col3: 'hi'
            },
            {
                col1: 'whatever',
                col2: 'you want',
                col3: 'hi'
            },
        ],
        []
    )

    const tableInstance = useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    useEffect(() => {
        Axios.get(ENV.URL + 'expense')
            .then((response) => {
                // expense.push(response.data)
                setExpense(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        // <table {...getTableProps()}>
        //     <thead >
        //         {headerGroups.map(headerGroup => (
        //             <tr {...headerGroup.getHeaderGroupProps()}>
        //                 {headerGroup.headers.map(column => (
        //                     <th
        //                         {...column.getHeaderProps()} >
        //                         {column.render('Header')}
        //                     </th>
        //                 ))}
        //             </tr>
        //         ))}
        //     </thead>
        //     <tbody {...getTableBodyProps()}>
        //         {
        //             rows.map((row) => {
        //                 prepareRow(row)
        //                 return (
        //                     <tr {...row.getRowProps()}>
        //                         {row.cells.map((cell) => {
        //                             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
        //                         })}
        //                     </tr>
        //                 )
        //             })
        //         }
        //     </tbody>
        // </table>
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
                        console.log('category ' + value.categoryId);
                        <tr key={value.categoryId}>
                            <td>{value.expenseDate}</td>
                            <td>{value.categoryId}</td>
                            <td>{value.amount}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default Dashboardtable
