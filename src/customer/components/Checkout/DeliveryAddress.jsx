import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import {Box, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const DeliveryAddress = () => {

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        const address={
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipcode: data.get("zip"),
            phoneNumber: data.get("phoneNumber")
        }
        console.log("address",address)
        navigate('?step=2')

    }

  return (
    <div>
      <div className='grid grid-cols-3' >
        <div className='border rounded-e-md shadow-md overflow-y-scroll'>
            <div className='p-5 py-7 border-b cursor-pointer'>
                <AddressCard/>
                <button onClick={()=>navigate('?step=2')} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Deliver Here
                </button>
            </div>
        </div>
        <div className='col-span-2'>
            <Box className="border rounded-s-md shadow-md p-2 ml-10">
                <form className='grid grid-cols-2' onSubmit={handleSubmit}>
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
                    <div className='p-3  col-span-2'>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            multiline
                            fullWidth
                            autoComplete="Address"
                        /> 
                    </div>
                    <div className='p-3'>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="City"
                        /> 
                    </div>
                    <div className='p-3'>
                        <TextField
                            required
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            autoComplete="State/Province/Region"
                        /> 
                    </div>
                    <div className='p-3'>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip/Postal Code"
                            fullWidth
                            autoComplete="shipping postal-code"
                        /> 
                    </div>
                    <div className='p-3'>
                        <TextField
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            fullWidth
                            autoComplete="Phone Number"
                        /> 
                    </div>
                    <div className='p-3 col-span-2'>
                        <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Deliver Here
                        </button>
                    </div>
                </form>
            </Box>
        </div>
      </div>
    </div>
  )
}

export default DeliveryAddress
