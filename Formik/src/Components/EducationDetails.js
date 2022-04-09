import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'

const yearOptions = [
    { key: 'select year', value: '' },
    { key: 2019, value: 2019 },
    { key: 2020, value: 2020 },
    { key: 2021, value: 2022 },
]

function EducationDetails() {
    const initialValues = {
        EducationData: [{
            institute: '',
            yop: '',
            degree: ''
        }]
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {
                ({ values }) => {
                    return (
                        <Form>
                            <FieldArray name='EducationData'>
                                {({ insert, push, remove }) => (
                                    <div>
                                        {
                                            values.EducationData.length > 0 &&
                                            values.EducationData.map((data, index) => {
                                                console.log(index)
                                                return (
                                                    <div key={index}>
                                                        <div >
                                                            <label>Institute/School</label>
                                                            <Field
                                                                name={`EducationData.${index}.institute`}
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label>Year of Pass</label>
                                                            <Field
                                                                name={`EducationData.${index}.yop`}
                                                                as='select' >
                                                                {yearOptions.map((option) => (
                                                                    <option key={option.key} value={option.value} >
                                                                        {option.key}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                        </div>
                                                        <div>
                                                            <label>Degree/Course</label>
                                                            <Field
                                                                name={`EducationData.${index}.degree`}
                                                                type='text' />
                                                        </div>
                                                        <div className="col">
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        <button
                                            type="button"
                                            onClick={() => push({ institute: '', yop: '', degree: '' })}
                                        >
                                            add
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                            <button type='submit'>Save</button>
                        </Form>
                    )
                }
            }

        </Formik >
    )
}

export default EducationDetails