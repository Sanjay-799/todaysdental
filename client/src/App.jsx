import React from 'react'
import HeaderPage from './components/Header';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import FooterPage from './components/Footer';

function App() {
  return (
    <div>
      <HeaderPage />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <FooterPage/>
    </div>
  )
}

export default App