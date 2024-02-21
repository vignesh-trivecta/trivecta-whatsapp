import React from 'react'
import { Link } from 'react-router-dom'

const LinkWithLabel = ({LinkName, To, Label}) => {
  return (
    <div className='flex space-x-2'>
        <p className="font-semibold">{Label}</p>
        <Link to={To} className='underline'  >{LinkName}</Link>
    </div>
  )
}

export default LinkWithLabel