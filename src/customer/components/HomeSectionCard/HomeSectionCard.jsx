import { Padding } from '@mui/icons-material'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomeSectionCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate('/product/{2}')} className='cursor-pointer flex flex-col items-center bg-white rounder-lg shadow-lg overflow-hidden w-[12rem] h-[20rem] mx-3 border' >
        <div className='h-[13rem] w-[10rem]' >
            <img className='object-cover object-top w-full h-full' src={product.image} alt="img"></img>

        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-2,text-sm text-gray-500'>{product.title}</p>
        </div>
      
    </div>
  )
}

export default HomeSectionCard
