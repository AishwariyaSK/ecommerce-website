import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const OrderDetails = () => {
  return (
    <div className='m-10'>
        <div className='lg:grid grid-cols-3' >
        <div className='border rounded-e-md '>
            <div className='p-5  border-b'>
                <h1 className='font-bold my-2'>Deliver Address</h1>
                <AddressCard/>

            </div>
        </div>
        <div className='col-span-2  py-20' sx={{alignItems:"center"}} >
            <OrderTracker activeStep={2}/>
        </div>
        </div>

        {[1,1,1,1].map((item)=>(
            <div className='p-5 shadow-lg border rounded-md mt-5'>

            <div className='flex items-center'>

            <div className='w-[5rem] h-[8rem] lg:w-[7rem] lg:h-[10rem]'>
                <img className='w-full h-full object-cover object-top' src='https://www.ethnicplus.in/media/wysiwyg/ezgif-3-26e7048402.jpg' alt=''></img>
            </div>
            <div className='ml-5 space-y-1'>
                <h1 className="text-lg lg:text-s font-semibold text-gray-900">Universal outfit</h1>
                <h1 className="text-lg lg:text-s opacity-60 pt-1 text-gray-900">casual puff sleeves solid women white top</h1>
                <p className='font-semibold'>₹399</p>
            </div>
            <div className='ml-5 space-y-1'>
                <StarBorderIcon  sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                <span>Rate & Review Product</span>
            </div>

            </div>
        </div>
        ))}
        
    </div>
  )
}

export default OrderDetails
