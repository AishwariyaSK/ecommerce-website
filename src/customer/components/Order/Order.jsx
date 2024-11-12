import React from 'react'
import OrderCard from './OrderCard'


const orderStatus=[
    {label:"On The Way", value:"on_the_way"},
    {label:"Delivered", value:"deliveres"},
    {label:"Cancelled", value:"cancelled"},
    {label:"Returned", value:"returned"}
]

const Order = () => {
  return (
    <div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1'>
        <div className='h-auto shadow-lg p-10 m-5 lg:sticky top-5 relative sx={justify-content:space-around} h-[40vh]'>
            <h1 className='font-bold text-lg'>Order Status</h1>
            <div className='mt-3'>
                {orderStatus.map((option,index)=>(
                    <div key={index}>
                    <input defaultValue={option.value} type="checkbox" className='border-gray-300 text-indigo focus:ring-indigo-500'/>
                    <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
        <div className='px-5 col-span-3 mt-5'>
         {[1,1,1,1,1].map((item)=> <OrderCard/>)}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Order
