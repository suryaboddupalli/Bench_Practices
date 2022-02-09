import React from 'react';
import './Transaction.css'

function TransactionList({ data }) {
    return (
        <div className='card ' key={data._id}>
            <h5 className="card-title">{data.TransactionType}</h5>
            <h6 className="card-subtitle mb-2 position-absolute transfer">{data.Name}</h6>
            <h6 className="card-subtitle mb-2 position-absolute transfer">{data.Sender}&nbsp;&nbsp;&nbsp; &nbsp;{data.Receiver}</h6>
            <p>{data.Amount}</p>
            <p className="position-absolute status">{data.Status}</p>
            <p className="time" >{data.createdAt}</p>
        </div>
    )
}

export default TransactionList;
