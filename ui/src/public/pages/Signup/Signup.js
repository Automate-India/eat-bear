import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

export default function Signup() {
  return (
    <div>
        Signup
        <Input label='Firstname' value=''/>
        <Input label='Lastname' value=''/>
        <Input label='Email' value=''/>
        <Input label='Password' value=''/>
        <Button> Signup</Button>
    </div>
  )
}
