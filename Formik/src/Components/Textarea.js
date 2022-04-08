import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Textarea(props) {
    const { name, label, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field as='textarea' id={name} name={name} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea