import React from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div>payment</div>
      <div>
        <button onClick={()=>navigate('/orderDetails')} className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >order details</button>
      </div>
    </div>
  )
}

export default Payment
