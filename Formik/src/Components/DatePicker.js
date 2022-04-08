import { Field } from 'formik';
import React from 'react'
import Date from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {
    const { label, name, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <Date
                                {...field}
                                {...rest}
                                id={name}
                                selected={value}
                                onChange={val => setFieldValue(name, val)} />
                        )
                    }

                }
            </Field>
        </div>
    )
}

export default DatePicker