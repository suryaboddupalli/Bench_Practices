import { ErrorMessage, Field, Formik, Form, FieldArray } from 'formik'
import React from 'react'
import TextError from './TextError'

function FormComponent() {
    const initialValues = {
        name: '',
        email: '',
        comment: '',
        details: '',
        address: {
            street: '',
            city: '',
            state: '',
            pincode: ''
        },
        phone: ['', ''],
        education: ['']
    }

    const validate = values => {
        let errors = {}
        if (!values.name) {
            errors.name = "Name is Required"
        }
        if (!values.email) {
            errors.email = "email is Required"
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
            errors.email = 'Invalid Email'
        }
        if (!values.details) {
            errors.details = 'details is required'
        }
        return errors
    }

    const validateComment = value => {
        let error
        console.log(value)
        if (!value) {
            error = 'Required'
        }
        return error
    }

    const onSubmit = values => {
        console.log(values)
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            <Form>
                <div>
                    <label>Name</label>
                    <Field name='name' type='text' />
                    <ErrorMessage name='name' component={TextError} />
                </div>
                <div>
                    <label>Email</label>
                    <Field name='email' type='email' />
                    <ErrorMessage name='email'>
                        {
                            (errorMessage) => <div style={{ color: 'red' }}>{errorMessage}</div>
                        }
                    </ErrorMessage>
                </div>
                <div>
                    <label>Comments</label>
                    <Field name='comment' type='text' validate={validateComment} />
                    <ErrorMessage name='comment' component={TextError} />
                </div>
                <div>
                    <label>Details</label>
                    <Field name='details'>
                        {
                            (props) => {
                                const { field, meta } = props
                                return (
                                    <div>
                                        < input type='text' {...field} />
                                        {meta.touched && meta.error ?
                                            <div style={{ color: 'red' }}>{meta.error}</div> : null}
                                    </div>)

                            }
                        }
                    </Field>
                </div>
                <div>
                    <label>Street</label>
                    <Field name='address.ptreet' type='text' />
                </div>
                <div>
                    <label>City</label>
                    <Field name='address.pity' type='text' />
                </div>
                <div>
                    <label>State</label>
                    <Field name='address.ptate' type='text' />
                </div>
                <div>
                    <label>Pincode</label>
                    <Field name='address.pincode' type='text' />
                </div>
                <div>
                    <label>Phone Number</label>
                    <Field name='phone[0]' type='text' />
                </div>
                <div>
                    <label>Alternate Number</label>
                    <Field name='phone[1]' type='text' />
                </div>
                <div>
                    <label>Education</label>
                    <FieldArray name='education'>
                        {
                            (fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps
                                console.log(fieldArrayProps)
                                const { values } = form
                                const { education } = values
                                return (
                                    <>
                                        {education.map((education, index) => (
                                            <div key={index}>
                                                <Field name={`education[${index}]`} />
                                                {
                                                    index > 0 && <button onClick={() => remove(index)}>-</button>
                                                }
                                                <button onClick={() => push('')}>+</button>
                                            </div>
                                        ))}
                                    </>)
                            }
                        }
                    </FieldArray>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default FormComponent