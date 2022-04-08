import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Input(props) {
    const { label, name, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input