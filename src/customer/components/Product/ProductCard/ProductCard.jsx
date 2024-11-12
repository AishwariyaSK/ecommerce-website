import React from 'react'
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate=useNavigate()

  return (
    <div onClick={()=>navigate(`/product/${6}`)} className='productCard w-[12rem] m-3 transition-all cursor-pointer'>
        <div className='h-[15rem]'>
            <img className='h-full w-full object-cover object-left-top' src={item.image} alt='img'></img>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bols opacity-60'>{item.brand}</p>
                <p>{item.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>{item.selling_price}</p>
                <p className='line-through opacity-50'>{item.price}</p>
                <p className='text-green-600 font-semibold'>{item.discount}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
