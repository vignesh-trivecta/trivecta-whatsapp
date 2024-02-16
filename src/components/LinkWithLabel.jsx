import React from 'react'
import { Link } from 'react-router-dom'

const LinkWithLabel = ({LinkName, To}) => {
  return (
    <div className='flex space-x-2'>
        <p className="font-semibold">Already a user?</p>
        <Link to={To} className='underline'  >{LinkName}</Link>
    </div>
  )
}

export default LinkWithLabel