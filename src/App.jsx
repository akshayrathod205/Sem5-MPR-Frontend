import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar'
import Landing from './Components/landing'
import Footer from './Components/footer'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import Rout from './Components/rout'
import Signup from './Components/signup'
import Product from './Components/products'
import Singleproduct from './Components/singleproduct'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/log_in" element={<Signup/>}/> 
        <Route path="/products" element={<Product />}/> 
        <Route path="/products/:id" element={<Singleproduct />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
