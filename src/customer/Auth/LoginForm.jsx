import React from 'react'

import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new  FormData(e.currentTarget);
        const userData={
            email:data.get("email"),
            password:data.get("password")
        }
        console.log("userData",userData)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <div className='p-3'>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="Email"
                /> 
            </div>
            <div className='p-3'>
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="Password"
                /> 
            </div>

            <div className='p-3 col-span-2'>
                <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Login
                </button>
            </div>

        </form>

        <div className='flex justify-center flex-col items-center'>
            <p>Don't have an account? <span><Button onClick={()=>navigate("/register")}className='ml-5' size='small'>
                Register
            </Button></span></p>
        </div>


    </div>
  )
}

export default LoginForm
