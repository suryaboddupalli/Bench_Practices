import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const validationSchema = Yup.object({
    firstName: Yup.string().required('Firstname is Required'),
    lastName: Yup.string().required('Lastname is Required'),
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    phone: Yup.array('').required('Mobile Number is Required'),
    dob: Yup.string().required('Date of Birth is Required'),
    gender: Yup.string().required('Gender is Required'),
    password: Yup
        .string()
        .min(8, 'Password should be of minimum 8 characters')
        .required('Password is required'),
    cnfPassword: Yup.string().required('conform password is required')
        .oneOf([Yup.ref('password', '')], 'passwords should be match'),
});

const MaterialRegister = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: [],
            dob: '',
            gender: '',
            password: '',
            cnfPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Stack spacing={3}  >
            <Box width={300} sx={{ marginTop: 20, marginLeft: 60 }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }} color='secondary'>Register</Typography>
                <Stack spacing={2} direction='row' >
                    <form onSubmit={formik.handleSubmit} >
                        <TextField
                            color='secondary'
                            fullWidth
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            color='secondary'
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            color='secondary'
                            fullWidth
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            color='secondary'
                            fullWidth
                            name="phone[0]"
                            label="Mobile"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            color='secondary'
                            fullWidth
                            name="phone[1]"
                            label="Alt-Mobile"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            color='secondary'
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            color='secondary'
                            fullWidth
                            name="cnfPassword"
                            label="Conform Password"
                            type="password"
                            value={formik.values.cnfPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.cnfPassword}
                            helperText={formik.touched.cnfPassword && formik.errors.cnfPassword}
                        />
                        <Button color="secondary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </form>
                </Stack>
            </Box>
        </Stack>
    );
};

export default MaterialRegister