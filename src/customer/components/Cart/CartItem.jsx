import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md mt-5'>

      <div className='flex items-center'>

        <div className='w-[5rem] h-[8rem] lg:w-[7rem] lg:h-[10rem]'>
            <img className='w-full h-full object-cover object-top' src='https://www.ethnicplus.in/media/wysiwyg/ezgif-3-26e7048402.jpg' alt=''></img>
        </div>
        <div className='ml-5 space-y-1'>
            <h1 className="text-lg lg:text-s font-semibold text-gray-900">Universal outfit</h1>
            <h1 className="text-lg lg:text-s opacity-60 pt-1 text-gray-900">casual puff sleeves solid women white top</h1>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>₹399</p>
                <p className='line-through opacity-50'>₹599</p>
                <p className='text-green-600 font-semibold'>35% off</p>
            </div>
            <div>
                <IconButton><RemoveCircleOutlineIcon/></IconButton>
                <span className='py-1 px-7 border rounded-sm'>2</span>
                <IconButton><AddCircleOutlineIcon/></IconButton>
            </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem
