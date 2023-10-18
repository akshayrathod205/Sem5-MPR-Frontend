import { useState } from "react";

import Navbar from "./Components/navbar";
import Landing from "./Components/landing";
import Footer from "./Components/footer";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import Rout from "./Components/rout";
import Signup from "./Components/signup";
import Product from "./Components/products";
import Singleproduct from "./Components/singleproduct";
import Contact from "./Components/Contact";
import Cart from './Components/cart'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<Singleproduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
