import ColumnFilter from "./ColumnFilter"

export const Columns = [
    {
        Footer: 'Id',
        Header: 'Id',
        accessor: 'id'
    },
    {
        Footer: 'FirstName',
        Header: 'FirstName',
        accessor: 'first_name'
    },
    {
        Footer: 'LastName',
        Header: 'LastName',
        accessor: 'last_name'
    },
    {
        Footer: 'Email',
        Header: 'Email',
        accessor: 'email'
    },
    {
        Footer: 'Gender',
        Header: 'Gender',
        accessor: 'gender'
    },
    {
        Footer: 'Age',
        Header: 'Age',
        accessor: 'age'
    },
    {
        Footer: 'Address',
        Header: 'Address',
        accessor: 'address'
    }
]


export const GroupedColumns = [
    {
        Footer: 'Id',
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Footer: 'Name',
        Header: "Name",
        columns: [
            {
                Footer: 'FirstName',
                Header: 'FirstName',
                accessor: 'first_name',
                Filter: ColumnFilter
            },
            {
                Footer: 'LastName',
                Header: 'LastName',
                accessor: 'last_name',
                Filter: ColumnFilter

            }
        ]
    }, {
        Footer: 'Info',
        Header: "Info",
        columns: [
            {
                Footer: 'Email',
                Header: 'Email',
                accessor: 'email',
                Filter: ColumnFilter

            },
            {
                Footer: 'Gender',
                Header: 'Gender',
                accessor: 'gender',
                Filter: ColumnFilter
            },
            {
                Footer: 'Age',
                Header: 'Age',
                accessor: 'age',
                Filter: ColumnFilter
            },
            {
                Footer: 'Address',
                Header: 'Address',
                accessor: 'address',
                Filter: ColumnFilter
            }
        ]
    }
]