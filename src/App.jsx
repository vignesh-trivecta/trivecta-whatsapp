import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceList from './components/ServiceList'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#F6F9F9] h-screen '>
      <img src='src\assets\logo.jpg' width={'80px'}  height={'80px'} className='mb-16' />
      <div className='flex flex-col lg:flex-row justify-around items-center p-4 lg:p-0 space-y-6 lg:space-y-0 overflow-auto'>
        <ServiceList />
        <Form />
      </div>
    </div>
  )
}

export default App
