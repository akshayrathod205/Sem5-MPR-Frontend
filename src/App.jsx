import { useState } from "react";
import Navbar from "./Components/navbar";
import Home from "./Components/landing";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/signup'
import Product from './Components/products'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
