import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar'
import Landing from './Components/landing'
import Footer from './Components/footer'
import {BrowserRouter} from 'react-router-dom'
import Rout from './Components/rout'
function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Rout />
    <Footer />
    </BrowserRouter>
  )
}

export default App
