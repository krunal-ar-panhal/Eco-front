import React, { useState } from 'react'
import Motion from '../Components/Motion'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {

  const [method, setMethod] = useState("cod");

  return (
    <Motion>
      <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
        {/* LEFT SIDE */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className='flex gap-3 w-auto'>
            <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5' />
            <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5' />
          </div>

          <input type="text" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5' />
          <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5' />

          <div className='flex gap-3'>
            <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5' />
            <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5' />
          </div>

          <div className='flex gap-3'>
            <input type="text" placeholder='Zip Code' className='border border-gray-300 rounded py-1.5 px-3.5' />
            <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5' />
          </div>

          <input type="text" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5' />
        </div>

        {/* RIGHT SIDE */}
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal />
            <div className='mt-12'>
              <Title text1={"PAYMENT"} text2={"METHOD"} />
              {/* PAYMENT METHOD */}
              <div className='flex gap-3 flex-col lg:flex-row'>
                <div
                  onClick={() => setMethod("stripe")}
                  className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === "stripe" ? "border-green-400 shadow-lg border-2" : ""}`}
                >
                  <img src="/assets/stripe_logo.png" alt="Stripe payment logo" className='h-5' />
                </div>
                <div
                  onClick={() => setMethod("razorpay")}
                  className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === "razorpay" ? "border-green-400 shadow-lg border-2" : ""}`}
                >
                  <img src="/assets/razorpay_logo.png" alt="Razorpay payment logo" className='h-5' />
                </div>
                <div
                  onClick={() => setMethod("cod")}
                  className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === "cod" ? "border-green-400 shadow-lg border-2" : ""}`}
                >
                  <p className='min-w-3.5 h-3.5 items-center font-semibold flex'>CASH ON DELIVERY</p>
                </div>
              </div>
              <div className='w-full text-end mt-8'>
                <Link to='/order'>
                  <button className='bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
                    PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  )
}

export default PlaceOrder
