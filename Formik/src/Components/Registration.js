import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const genderData = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Others', value: 'Others' }
]

function Registration() {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        phone: [],
        dob: '',
        gender: '',
        password: '',
        cnfPassword: ''
    }
    const validationSchema = Yup.object({
        firstname: Yup.string().required('Firstname is Required'),
        lastname: Yup.string().required('Lastname is Required'),
        email: Yup.string().required('Email is Required'),
        phone: Yup.array('').required('Mobile Number is Required'),
        dob: Yup.string().required('Date of Birth is Required'),
        gender: Yup.string().required('Gender is Required'),
        password: Yup.string().required('Password is Required'),
        cnfPassword: Yup.string().required('conform password is required')
            .oneOf([Yup.ref('password', '')], 'passwords should be match')
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
                formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            name='firstname'
                            type='text'
                            label='Firstname' />
                        <FormikControl
                            control='input'
                            name='lastname'
                            type='text'
                            label='Lastname' />
                        <FormikControl
                            control='input'
                            name='email'
                            type='text'
                            label='Email' />
                        <FormikControl
                            control='input'
                            name='phone[0]'
                            type='number'
                            label='Mobile Number' />
                        <FormikControl
                            control='input'
                            name='phone[1]'
                            type='number'
                            label='Atl-Mobile Number' />
                        <FormikControl
                            control='date'
                            name='dob'
                            label='Date of Birth' />
                        <FormikControl
                            control='radio'
                            name='gender'
                            label='Gender'
                            options={genderData} />
                        <FormikControl
                            control='input'
                            label='Password'
                            name='password'
                            type='password' />
                        <FormikControl
                            control='input'
                            label='Conform-Password'
                            name='cnfPassword'
                            type='password' />
                        <button onSubmit={onSubmit}>Register</button>
                    </Form>
                )
            }

        </Formik>
    )
}

export default Registration