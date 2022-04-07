import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'

function FieldArrays() {

    const data = {
        Name: '',
        Degree: '',
        Year: ''
    }
    const initialValues = {
        education: [data]
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    console.log(initialValues)

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}>
            <Form>
                <FieldArray name='education'>
                    {
                        (fieldArrayProps) => {
                            const { push, remove, form } = fieldArrayProps
                            console.log(fieldArrayProps)
                            const { values } = form
                            const { education } = values
                            return (
                                <>
                                    {education.map((index, education) => (
                                        < div >

                                            {console.log(education, index)}
                                            <div>
                                                <label>Name</label>
                                                <Field name={education.Name} />
                                            </div>
                                            <div>
                                                <label>Degree</label>
                                                <Field name='education.Degree' />
                                            </div>
                                            <div>
                                                <label>Year</label>
                                                <Field name='education.Year' />
                                            </div>
                                            {
                                                index > 0 && <button onClick={() => remove(index)}>-</button>
                                            }
                                            <button onClick={() => push('')}>+</button>
                                        </div>

                                    ))}
                                </>
                            )
                        }
                    }
                </FieldArray>
                <button type='submit'>submit</button>
            </Form>
        </Formik >
    )
}

export default FieldArrays