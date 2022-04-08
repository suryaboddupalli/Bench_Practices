import { ErrorMessage, Field, Formik, Form, FieldArray } from 'formik'
import React from 'react'
import TextError from './TextError'

function ManualValidation() {
    const initialValues = {
        name: '',
        email: '',
        comment: '',
        details: '',
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
            {
                formik => {
                    console.log(formik)
                    return (
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
                            <button onClick={() => formik.validateField('comments')}>validate comments</button>
                            <button onClick={() => formik.validateForm()}>validate form</button>
                            <button onClick={() => formik.setFieldTouched('comments')}>validate field</button>
                            <button onClick={() => formik.setTouched({
                                name: 'true',
                                email: true
                            })}>validate all</button>
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default ManualValidation