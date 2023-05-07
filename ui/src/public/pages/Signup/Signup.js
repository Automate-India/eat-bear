import React from 'react'
import {useFormik, yupToFormErrors} from "formik";
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import * as Yup from "yup";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


export default function Signup() {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().max(15, "Must be 15 characters or less").required("Required!"),
            lastname: Yup.string().max(15, "Must be 15 characters or less").required("Required!"),
            email: Yup.string().email("Invalid email").required("Required!"),
            password: Yup.string().max(10, "Must be of 10 charcters").min(3, "Must be atleast 3 charcters").required("Password must be provided!")
        }),
        onSubmit: values => {
            console.log(values);
        }
    })
  return (
    <div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <form onSubmit={formik.handleSubmit}>
        Signup
        <Input  label='Firstname' 
                name="firstname" 
                id="firstname" 
                error={formik.touched.firstname}
                errorText={formik.errors.firstname}
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inputType="outlined"
        />
        <Input label='Lastname' 
            name="lastname"
            id="lastname"
            error={formik.touched.lastname}
            errorText={formik.errors.lastname}
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputType="outlined"
        />
        <Input label='Email' name="email" type="email" id="email" 
        error={formik.touched.email}
        errorText={formik.errors.lastname}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        inputType="outlined"
        />
        <Input label='Password' 
        type="password" 
        value={formik.values.password} 
        error={formik.touched.password}
        errorText={formik.errors.password}
        onBlur={formik.handleBlur}
        name="password" 
        id="password"
        onChange={formik.handleChange}
        inputType="outlined"
        />
        <Button type="submit"> Signup</Button>
        </form>
        </CardContent>
    </Card>
        
    </div>
  )
}
