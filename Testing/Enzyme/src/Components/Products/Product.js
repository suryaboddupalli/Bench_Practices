import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import ProductList from './ProductList'
import { fetch } from "../../Redux/Actions"

function Product({ data, fetchData }) {
    // const dispatch = useDispatch()
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {data && data.map((data) => (
                <>
                    <ProductList data={data} />
                </>
            ))}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)