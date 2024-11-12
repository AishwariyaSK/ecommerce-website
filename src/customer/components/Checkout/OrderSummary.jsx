import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from '../Cart/Cart'
import CartItem from '../Cart/CartItem'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const navigate=useNavigate()

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>
      <div>
      <div className='lg:grid grid-cols-3 relative'>
        <div className='px-5 col-span-2 mt-5'>
         {[1,1,1,1,1].map((item)=> <CartItem/>)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 relative'>
          <div className='border p-5'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr/>
            <div className='space-y-3 font-semibold'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>₹1671</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span className='opacity-60 font-bold'>Total Amount</span>
                <span className='text-green-600'>₹3026</span>
              </div>

            </div>
            <button onClick={()=>navigate('?step=3')} type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default OrderSummary
