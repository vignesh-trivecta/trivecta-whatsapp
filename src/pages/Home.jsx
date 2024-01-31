import React from 'react'
import Form from '../components/Form'
import ServiceList from "../components/ServiceList"

const Home = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-around items-center p-4 lg:p-0 space-y-6 lg:space-y-0'>
        <ServiceList />
        <Form />
      </div>
    </>
  )
}

export default Home