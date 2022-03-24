import React from 'react'

function ButtonClick({ buttonText, emitEvent }) {

    const submitEvent = () => {
        if (emitEvent) {
            emitEvent()
        }
    }
    return (
        <button onClick={() => submitEvent()} data-test="buttonComponent">
            {buttonText}
        </button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default ButtonClick


