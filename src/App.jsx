import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolices from './pages/PrivacyPolices'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <div className='bg-[#F6F9F9] h-[100vh] overflow-auto'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/sign-in' element={<SignIn />} /> */}
            <Route path='/privacy-policies' element={<PrivacyPolices />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
