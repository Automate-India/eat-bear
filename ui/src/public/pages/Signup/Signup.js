import React from 'react'
import { useFormik } from "formik";
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import * as Yup from "yup";
import CardContent from '@mui/material/CardContent';
import { Container, Typography, Stack, Paper } from '@mui/material';



export default function Signup() {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(3, "Firstname must be atleast 3 chars!").max(15, "Must be 15 characters or less").required("Required!"),
            lastname: Yup.string().min(3, "Lastname must be atleast 3 chars!").max(15, "Must be 15 characters or less").required("Required!"),
            email: Yup.string().email().required(),
            password: Yup.string().max(20, "Must be less than 20 charcters").min(4, "Password must be atleast 4 chars!").required("Password must be provided!")
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <Container maxWidth="lg" style={{height: "100vh"}}>
            <Stack justifyContent="center" direction="row" style={{height: "inherit"}} alignItems="center">
            <Paper sx={{ minWidth: 275 , width: 500, maxHeight:500}}>
                <CardContent>
                    <Stack spacing={1}>
                        <Typography variant='h3' textAlign="center">Signup</Typography>
                        <Stack justifyContent="center" direction="row">
                            <form onSubmit={formik.handleSubmit}>
                                <Stack spacing={2}>
                                    <Input label='Firstname'
                                        name="firstname"
                                        id="firstname"
                                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                        errorText={formik.touched.firstname && formik.errors.firstname}
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        inputType="outlined"
                                        sx={{width: 300}}
                                    />
                                    <Input label='Lastname'
                                        name="lastname"
                                        id="lastname"
                                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        errorText={formik.touched.lastname && formik.errors.lastname}
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        inputType="outlined"
                                        sx={{width: 300}}
                                    />
                                    <Input label='Email' 
                                        name="email" 
                                        type="email" 
                                        id="email"
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        errorText={formik.touched.email && formik.errors.email}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        inputType="outlined"
                                        sx={{width: 300}}
                                    />
                                    <Input label='Password'
                                        type="password"
                                        value={formik.values.password}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        errorText={formik.touched.password && formik.errors.password}
                                        onBlur={formik.handleBlur}
                                        name="password"
                                        id="password"
                                        onChange={formik.handleChange}
                                        inputType="outlined"
                                        sx={{width: 300}}
                                    />
                                    <Stack direction="row" justifyContent="center">
                                        <Button type="submit"  disabled={!formik.isValid}>
                                        Signup
                                        </Button>
                                    </Stack>
                                </Stack>
                            </form>
                        </Stack>
                    </Stack>
                </CardContent>
            </Paper>
        </Stack>
        </Container>
    )
}
