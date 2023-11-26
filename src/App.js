import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Login from './components/Login'
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import Admin from './components/Admin'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<Booking />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App