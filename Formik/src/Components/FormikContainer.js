import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const yearOptions = [
    { key: 'select year', value: '' },
    { key: 2017, value: 2017 },
    { key: 2018, value: 2018 },
    { key: 2019, value: 2019 },
    { key: 2020, value: 2020 },
    { key: 2021, value: 2022 },
]

const RadioData = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Others', value: 'Others' }
]

const CheckBoxData = [
    { key: 'HTML', value: 'HTML' },
    { key: 'Css', value: 'Css' },
    { key: 'JavaScript', value: 'JavaScript' },
    { key: 'React', value: 'React' },
]

function FormikContainer() {
    const initialValues = {
        name: '',
        description: '',
        yop: '',
        gender: '',
        skills: [],
        date: null
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is Requied'),
        description: Yup.string().required('Description is required'),
        yop: Yup.number().required('year is required'),
        gender: Yup.string().required('Gender is Required'),
        skills: Yup.array().required('Skills is Required'),
        date: Yup.date().required('Date is Required')
    })

    const onSubmit = values => {
        return (
            console.log('Form data', values)
        )
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
                                type='text'
                                label='Name'
                                name='name' />
                            <FormikControl
                                control='textarea'
                                type='text'
                                label='Description'
                                name='description' />
                            <FormikControl
                                control='select'
                                type='number'
                                label='Year of Pass'
                                name='yop'
                                options={yearOptions} />
                            <FormikControl control='radio'
                                label='Gender'
                                name='gender'
                                options={RadioData} />
                            <FormikControl
                                control='checkbox'
                                label='Skills'
                                name='skills'
                                options={CheckBoxData} />
                            <FormikControl
                                control='date'
                                name='date'
                                label='Date' />
                            <button type='submit'>submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer