import { useState } from 'react'
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
