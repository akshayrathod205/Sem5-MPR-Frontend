import Home from './landing'
import { Route, Routes } from "react-router-dom"
import Product from './products'
import Signup from './signup'

export default function Rout(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/log_in" element={<Signup/>}/> 
        <Route path="/products" element={<Product/>}/> 
      </Routes>
    </>
  )

}