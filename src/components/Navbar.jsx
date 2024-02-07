import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='p-2 flex justify-between items-center bg-[#0C3C60]'>
        <Link to={"https://www.trivectadigital.com/"}>
            <img src={"logo3.png"} width={'82px'}  height={'87px'} className='' />
        </Link>
        {/* <img src='public\logo1.png' width={'120px'}  height={'120px'} className='mb-4 ' /> */}
        <div className='mr-0 lg:mr-32 text-lg lg:text-3xl font-bold text-white'>
            <p>Trivecta Digital - Reliable WhatsApp Tech Provider</p>
        </div>
    </div>
  )
}

export default Navbar