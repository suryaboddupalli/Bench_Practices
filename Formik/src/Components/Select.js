import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field as='select' name={name} id={name} {...rest} >
                {
                    options.map((option) => (
                        <option key={option.key} value={option.value} >
                            {option.key}
                        </option>
                    ))
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select