import React, { useMemo } from 'react'
import { useTable } from "react-table"
import { Columns, GroupedColumns } from './Columns'
import MOCK_DATA from '../MOCK_DATA.json'
import "./Table.css"
import GlobalFliter from './GlobalFliter'
import { useFilters, useGlobalFilter, useColumnOrder } from 'react-table/dist/react-table.development'

function BasicTable() {
    const columns = useMemo(() => GroupedColumns, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        footerGroups,
        setGlobalFilter,
        state,
        setColumnOrder,
        allColumns,
    } = useTable({
        columns,
        data
    }, useFilters,
        useGlobalFilter,
        useColumnOrder)

    const { globalFilter } = state

    const ChangeOrder = () => {
        setColumnOrder(['id', 'first_name', 'last_name', 'address', 'age', 'email'])
    }

    const Rearrange = () => {
        setColumnOrder(['id', 'first_name', 'last_name', 'email', 'address', 'age',])

    }

    return (
        <>

            {
                allColumns.map(column => (
                    <div key={column.id}>
                        <label>
                            <input type='checkbox' {...column.getToggleHiddenProps()} />
                            {column.Header}
                        </label>
                    </div>

                ))
            }
            <button onClick={ChangeOrder}>Change Columns order</button>
            <button onClick={Rearrange}>Rearrange Columns order</button>

            <GlobalFliter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
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
        </>
    )
}

export default BasicTable