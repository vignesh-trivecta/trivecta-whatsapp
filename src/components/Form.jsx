import React from 'react'
import FBbutton from './FBbutton'

const Form = () => {
  return (
    <div className='border border-gray-300 rounded-xl p-4 bg-white space-y-4'>
        <div>
            <p className='font-bold text-lg'>Start your free trial</p>
            <p className='text-gray-600'>Get started with a demo account on Trivecta</p>            
        </div>
        <FBbutton />
    </div>
  )
}

export default Form