import React, { useState } from 'react';

function Calculator() {
    const [result, setResult] = useState();

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult('')
    }
    const BackSpace = () => {
        setResult(result.slice(0, result.length - 1))
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

    return (
        <div className="Calculator">
            <div className='row'>
                <div className='col-6'>
                <button onClick={clear}>C</button>
                </div>
                <div className='col-6'>
                <button onClick={BackSpace}>BS</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-2">
                    <button onClick={handleClick} name="9"  >7</button>
                </div>
                <div className="col-2">
                    <button onClick={handleClick} name="8"  >4</button>
                </div>
                <div className="col-2">
                    <button onClick={handleClick} name="7"  >1</button>
                </div>
                <div className="col-3">
                    <button onClick={handleClick} name="/"  >&divide;</button>
                </div>
                <div className="col-3">
                    <button onClick={handleClick} name="x"  >&divide;</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-2">
                    <button onClick={handleClick} name="6"  >6</button>
                </div>
                <div className="col-2">
                    <button onClick={handleClick} name="5"  >5</button>
                </div>
                <div className="col-2">
                    <button onClick={handleClick} name="4"  >4</button>
                </div>
                <div className="col-3">
                    <button onClick={handleClick} name="-"  >-</button>
                </div>
                <div className="col-3">
                    <button onClick={handleClick} name="+"  >+</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-2">
                    <button onClick={handleClick} name="3"  >7</button>
                </div>
                <div className="col-2">
                    <button onClick={handleClick} name="2"  >4</button>
                </div>
                <div className="col-2">
                    <button onClick={handleClick} name="1"  >1</button>
                </div>
                <div className="col-3">
                    <button onClick={handleClick} name="0"  >0</button>
                </div>
                <div className="col-3">
                    <button onClick={calculate} name="="  >=</button>
                </div>
            </div>
        </div>
    );
}


export default Calculator;