import React, { Component, useState } from 'react';
import { connect } from 'react-redux';


function Transfer() {
    const [amount, setAmount] = useState('')

    return (
        <div className="container mt-5">
            <div className=" shadow bg-white py-4">
                <h1>Transfer Form</h1>
                <form >
                    <div >
                        <input type="text" name="sender" value="Sender : " />
                        <input type="text" value="Balance : " />
                    </div>
                    <div >
                        <input type="text" name="receiver" value="Receiver : " />
                        <input type="text" value="Balance : " />
                    </div>
                    <input type="text" placeholder="Transfer Amount" value={amount} />
                    <div>
                        <button className="btn btn-success">Transfer</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStatetoProps = state => {
    return {

    }
}

const mapDispatchtoProps = dispatch => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Transfer);