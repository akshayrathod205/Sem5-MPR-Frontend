import { AiOutlineShoppingCart } from 'react-icons/ai';
import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';


export default function Userdash(){

  return(
    <>
    <div className="cart-container">
      <div className="top">
      <div className="head">
        <div className="cart-icon">
        <AiOutlineShoppingCart/>
        </div>
      <h1 className='cart-heading'>Your Orders</h1>
      </div>
      <Link to='/'>
      <button className='btn'>Back</button>
      </Link>
      </div>

      <div className="cart-table">
        <h3 >Product Image</h3>
        <h3>Product Name</h3>
        <h3>Quantity (In Cartons)</h3>
        <h3>Quotation</h3>
        <h3>Payment Status</h3>
      </div>

    <div className="cart-table">
    <img src='/Hex-Head-Bolt_Transparent.png' className='cart-image'></img>
        <h3>Hex Bolts(DIN 931)</h3>
        <h3>Quantity</h3>
        <h3>Quotation</h3>
        <h3>Unpaid</h3>


    </div>

      

    </div>
    </>
  )
}


