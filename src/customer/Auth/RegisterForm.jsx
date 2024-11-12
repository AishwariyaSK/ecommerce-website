// import { useEffect } from 'react' 
// import { Button, TextField } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// // import { useDispatch } from 'react-redux'
// // import { getUser } from '../../State/Auth/Action'
// // import { useSelector } from 'react-redux'
// // import { register } from '../../State/Auth/Action';


// const RegisterForm = () => {
//     const navigate=useNavigate();
//     // const dispatch=useDispatch();
//     // const jwt=localStorage.getItem("jwt");
//     // const { auth } = useSelector((store) => store || { auth: {} });
//     // useEffect(() => {
//     //     if (jwt) {
//     //         dispatch(getUser());
//     //     }
//     // }, [jwt, auth?.jwt]);
    

//     useEffect()

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const data=new  FormData(e.currentTarget);
//         const userData={
//             firstName:data.get("firstName"),
//             lastName:data.get("lastName"),
//             email:data.get("email"),
//             password:data.get("password")
//         }
//         // dispatch(register(userData));

//         console.log("userData",userData)

//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>

//                     <div className='p-3'>
//                         <TextField
//                             required
//                             id="firstName"
//                             name="firstName"
//                             label="First Name"
//                             fullWidth
//                             autoComplete="First Name"
//                         /> 
//                     </div>
//                     <div className='p-3'>
//                         <TextField
//                             required
//                             id="lastName"
//                             name="lastName"
//                             label="Last Name"
//                             fullWidth
                            
//                             autoComplete="Last Name"
//                         /> 
//                     </div>
//                     <div className='p-3'>
//                         <TextField
//                             required
//                             id="email"
//                             name="email"
//                             label="Email"
//                             fullWidth
//                             autoComplete="Email"
//                         /> 
//                     </div>
//                     <div className='p-3'>
//                         <TextField
//                             required
//                             id="password"
//                             name="password"
//                             label="Password"
//                             fullWidth
//                             autoComplete="Password"
//                         /> 
//                     </div>

//                     <div className='p-3 col-span-2'>
//                         <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                         Register
//                         </button>
//                     </div>

//         </form>

//         <div className='flex justify-center flex-col items-center'>
//             <p>Already have an account? <span><Button onClick={()=>navigate("/login")}className='ml-5' size='small'>
//                 login
//             </Button></span></p>
            
//         </div>
      
//     </div>
//   )
// }

// export default RegisterForm




import React from 'react'

import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new  FormData(e.currentTarget);
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
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
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="First Name"
                /> 
            </div>
            <div className='p-3'>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="Last Name"
                /> 
            </div>
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
                    Register
                </button>
            </div>

        </form>

        <div className='flex justify-center flex-col items-center'>
            <p>Already have an account? <span><Button onClick={()=>navigate("/login")}className='ml-5' size='small'>
                Login
            </Button></span></p>
        </div>


    </div>
  )
}

export default RegisterForm
