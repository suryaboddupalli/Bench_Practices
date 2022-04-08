import React from 'react'
import { useFormik } from 'formik'

function Formik_Form() {

    const initialValues = {
        name: '',
        email: '',
        comment: ''
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
        if (!values.comment) {
            errors.comment = "comment is Required"
        }
        return errors
    }

    const onSubmit = values => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />
                {formik.touched.name && formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : null}
                <label>Email</label>
                <input type='email' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? <span style={{ color: 'red' }}>{formik.errors.email}</span> : null}
                <label>Comment</label>
                <input type='text' name='comment' onBlur={formik.handleBlur} value={formik.values.comment} onChange={formik.handleChange} />
                {formik.touched.comment && formik.errors.comment ? <span style={{ color: 'red' }}>{formik.errors.comment}</span> : null}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Formik_Form