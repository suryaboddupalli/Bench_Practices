import React from 'react';
import Education_Details from './Components/Data/Education_Details';
import Form from './form';

function Button() {

    const handleClick = (e) => {
        return (
            console.log('clicked'),
            < div >
                <h2>Education</h2>
                <Form />
            </div >
        )

    }
    return (
        <div>
            <form>
                <div>
                    <Form />
                    <Form />
                    <Form />
                </div>
            </form>
        </div>
    )
}

export default Button;
