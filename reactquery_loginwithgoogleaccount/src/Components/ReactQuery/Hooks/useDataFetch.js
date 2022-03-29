import axios from 'axios'
import { useQuery } from 'react-query'

const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

export const useDataFetch = ({ onError, onSuccess }) => {
    return useQuery('userData', fetchData,
        {
            onError, onSuccess,
            select: (data) => {
                const user = data.data.map(user => user.name)
                return user
            }
        }
    )
}