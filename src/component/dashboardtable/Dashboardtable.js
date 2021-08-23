import React, { useMemo } from 'react'
import { useTable } from 'react-table';
import COLUMNS from './Column'
import './Dashboardtable.css'

const Dashboardtable = () => {
    const columns = useMemo(() => COLUMNS, []);
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

    return (
        <table {...getTableProps()}>
            <thead >
            {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()} >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Dashboardtable
