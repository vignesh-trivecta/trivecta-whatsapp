import React from 'react';
import { TiTick } from "react-icons/ti";
import { listItems } from '../constants/ListItems';
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';


const ListItems = () => {
    return (
        listItems.map((item) => (
            <li 
                key={item.index} 
                className='flex items-start md:items-center space-x-2'
            >
                <TfiArrowCircleRight className='text-green-600 h-6 w-6' />
                <div className='text-base'>
                    <span className='font-semibold'>{item.title}:</span> {item.content}
                </div>
            </li>
        ))
    )
}

const ServiceList = () => {
  return (
      <div className='space-y-4'>
        <div className='flex justify-center'>
            {/* <img src='src\assets\logo2.png' width={'50px'}  height={'50px'} className='relative' /> */}
            <p className='text-center font-bold text-4xl'>
                <span className='text-green-700'>Trivecta</span>
                <span className='text-red-600'> Quick </span>
                <span className='text-blue-500'>Connect</span>
            </p>

        </div>
        <div className='space-y-6 border border-gray-300 rounded-xl shadow-xl p-4'>
            <div className='font-bold text-3xl'>
                <p>Direct, Secure, Seamless: </p>
                <p>Unlocking <span className='text-emerald-700'>Whatsapp</span> with Trivecta </p>
            </div>
            <ul className='space-y-4 text-lg text-gray-700'>
                <ListItems />
            </ul>
            <p>Check our <Link to={"/privacy-policies"} className='hover:underline text-blue-500'>Privacy policies</Link></p>
        </div>

        </div>
  )
}

export default ServiceList