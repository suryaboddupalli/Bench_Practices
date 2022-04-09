import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function Login() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

            {
                formik => {
                    return (
                        <Form>
                            <FormikControl
                                control='input'
                                label='Email'
                                name='email'
                                type='email' />
                            <FormikControl
                                control='input'
                                label='Password'
                                name='password'
                                type='password' />
                            <button type='submit' disabled={!formik.isValid}>Login</button>
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default Login