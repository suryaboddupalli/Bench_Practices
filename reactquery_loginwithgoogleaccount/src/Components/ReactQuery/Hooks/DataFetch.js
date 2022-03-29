import React from 'react'
import { useDataFetch } from './useDataFetch'


function CustomHook() {

    const onSuccess = (data) => {
        console.log("successs Data", data)
    }

    const onError = (error) => {
        console.log("error", error)
    }
    const { data, isError, error, isFetching, isLoading } = useDataFetch(onSuccess, onError)

    if (isLoading || isFetching) {
        return (
            <h2>Loading ....</h2>
        )
    }
    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }

    console.log({ "isFetching": isFetching, "isLoading": isLoading })

    return (
        <>
            {data.map((res) => (
                < div key={res} > {res}</div>
            ))}
        </>
    )
}

export default CustomHook
