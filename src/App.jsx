import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolices from './pages/PrivacyPolices'

function App() {

  return (
    <div className='bg-[#F6F9F9] h-[100vh] overflow-auto p-2'>
      <BrowserRouter>
        <div className='p-2 flex'>
          <img src='public\logo.png' width={'100px'}  height={'80px'} className='mb-2' />
          {/* <img src='public\logo1.png' width={'120px'}  height={'120px'} className='mb-4 ' /> */}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy-policies' element={<PrivacyPolices />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
