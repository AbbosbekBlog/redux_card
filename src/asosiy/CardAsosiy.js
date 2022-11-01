import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from '../components/Card'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

const CardAsosiy = () => {
  return (
    <div className="card_Asosiy">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CardAsosiy
