import React, { useMemo } from 'react'
import { useTable, useSortBy } from "react-table"
import { Columns } from './Columns'
import MOCK_DATA from '../MOCK_DATA.json'
import "./Table.css"

function Sorting() {
    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    },
        useSortBy)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? <p>Desc</p> : <p>Asec</p>) : null}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}

            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr{...footerGroup.getFooterGroupProps}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>
                                    {column.render('Footer')}
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}

export default Sorting