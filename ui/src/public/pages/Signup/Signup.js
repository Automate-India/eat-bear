import React from 'react'
import {useFormik} from "formik";
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'


export default function Signup() {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        onSubmit: values => {
            console.log(values);
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
        Signup
        <Input  label='Firstname' 
                name="firstname" 
                id="firstname" 
                value={formik.values.firstname}
                onChange={formik.handleChange}
        />
        <Input label='Lastname' 
            name="lastname"
            id="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
        />
        <Input label='Email' name="email" type="email" id="email" 
        value={formik.values.email}
        onChange={formik.handleChange}
        />
        <Input label='Password' 
        type="password" 
        value={formik.values.password} 
        name="password" 
        id="password"
        onChange={formik.handleChange}
        />
        <Button type="submit"> Signup</Button>
        </form>
    </div>
  )
}
