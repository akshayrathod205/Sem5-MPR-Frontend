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
import Cart from "./Components/cart";
import Userdash from "./Components/userdash";
import AddProduct from "./Components/AddProduct";
import AdminDash from "./Components/AdminDash";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Singleorder from "./Components/singleorder";
import Payment from "./Components/payment";
import Orderdetails from "./Components/Orderdetails";
import Admin from "./Components/Admin";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/userdash" element={<Userdash />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/dashboard" element={<AdminDash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/singleorder/:id" element={<Singleorder />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/orderdetails/:id" element={<Orderdetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
