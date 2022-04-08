import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function CheckBox(props) {
    const { label, options, name, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name}>
                {
                    ({ field }) => {
                        console.log(field)
                        return (
                            options.map((option) => (
                                <React.Fragment key={option.key}>
                                    <input
                                        type='checkbox'
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label>{option.key}</label>
                                </React.Fragment>
                            ))
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckBox