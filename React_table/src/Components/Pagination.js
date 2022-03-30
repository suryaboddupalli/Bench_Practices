import React, { useMemo } from 'react'
import { useTable, usePagination } from "react-table"
import { Columns, GroupedColumns } from './Columns'
import MOCK_DATA from '../MOCK_DATA.json'
import "./Table.css"

function Pagination() {
    const columns = useMemo(() => GroupedColumns, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        state,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount, setPageSize
    } = useTable({
        columns,
        data
    }, usePagination)

    const { pageIndex, pageSize } = state

    return (
        <>
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
                    {page.map(row => {
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
            </table>
            <div>
                <span>
                    <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                        {[10, 15, 20].map((pageSize) => (
                            <option key={pageSize} value={pageSize} >show{pageSize}</option>
                        ))}
                    </select>
                </span>
                <span>
                    page-
                    <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                </span>
                <span>
                    goToPage:
                    <input type='number' defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }} />
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    )
}

export default Pagination