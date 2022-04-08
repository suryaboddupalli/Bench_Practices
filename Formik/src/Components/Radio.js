import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Radio(props) {
    const { label, options, name, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        console.log({ field })
                        return (
                            options.map((option) => (
                                <React.Fragment key={option.key}>
                                    <input
                                        type='radio'
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value}
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

export default Radio