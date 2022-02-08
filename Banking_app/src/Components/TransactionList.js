import React from 'react';

function TransactionList({ data, index }) {
    return (
        <div className='card'>
            <div key={index} class="card-body">
                <h5 class="card-title">{data.TransactionType}</h5>
                <h6 class="card-subtitle mb-2 ">{data.Name}</h6>
                <h6 class="card-subtitle mb-2 ">{data.Sender}&nbsp;&nbsp;{data.Receiver}</h6>
                <p>{data.Amount}</p>
                <p>{data.Status}</p>
                <p>{data.createdAt}</p>
            </div>
        </div>
    )
}

export default TransactionList;
