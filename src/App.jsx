import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolices from './pages/PrivacyPolices'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#F6F9F9] h-[100vh] overflow-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy-policies' element={<PrivacyPolices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
