import React from 'react';
import { TiTick } from "react-icons/ti";
import { listItems } from '../constants/ListItems';

const ListItems = () => {
    return (
        listItems.map((item) => (
            <li 
                key={item.index} 
                className='flex items-start md:items-center'
            >
                <TiTick className='text-green-500 h-6 w-6' />{item.content}
            </li>
        ))
    )
}

const ServiceList = () => {
  return (
    <div className='space-y-8'>
        <div className='font-bold text-3xl'>
            <p>Everything you need to grow</p>
            <p>your business on <span className='text-emerald-700'>Whatsapp</span></p>
        </div>
        <ul className='space-y-4 text-lg text-gray-500'>
            <ListItems />
        </ul>
    </div>
  )
}

export default ServiceList