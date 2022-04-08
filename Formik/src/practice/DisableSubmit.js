import { ErrorMessage, Field, Formik, Form, FieldArray } from 'formik'
import React, { useState } from 'react'
import TextError from './TextError'

function DisableSubmit() {
    const [data, setData] = useState()
    const initialValues = {
        name: '',
        email: '',
        comment: '',
        details: '',
    }

    const savedData = {
        name: 'surya',
        email: 'surya@gmail.com',
        comment: 'hi',
        details: 'Ece',
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
        if (!value) {
            error = 'Required'
        }
        return error
    }

    const onSubmit = (values, onSubmitProps) => {
        console.log(values)
        console.log('onSubmitProps', onSubmitProps)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }

    console.log(data)

    return (
        <Formik
            initialValues={data || initialValues}
            onSubmit={onSubmit}
            validate={validate}
            // validateOnMount
            enableReinitialize
        >
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
                            <button type='button' onClick={() => setData(savedData)}>Saved Data</button>
                            <button type='reset'>Reset</button>
                            <button type='submit' disabled={!formik.isValid && formik.isSubmitting}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default DisableSubmit