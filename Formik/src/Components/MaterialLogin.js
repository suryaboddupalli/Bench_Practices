import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters')
        .required('Password is required'),
});

const MaterialLogin = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Stack spacing={3}  >
            <Box width={300} sx={{ marginTop: 20, marginLeft: 60 }}>
                <Typography variant='h4' sx={{ textAlign: 'center' }} color='secondary'>Login</Typography>
                <Stack spacing={2} direction='row' >
                    <form onSubmit={formik.handleSubmit} >
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
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password}
                            helperText={formik.touched.password && formik.errors.password}
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

export default MaterialLogin