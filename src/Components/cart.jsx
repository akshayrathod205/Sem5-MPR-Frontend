import { AiOutlineShoppingCart } from 'react-icons/ai';
import React from 'react';
import './cart.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Cart(){

  const [quantity, setQuantity] = useState(1);

  const onIncrease = () => {
    setQuantity(quantity + 1);
  };

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return(
    <>
    <div className="cart-container">
      <div className="top">
      <div className="header">
        <div className="cart-icon">
        <AiOutlineShoppingCart/>
        </div>
      <h1 className='cart-heading'>Cart</h1>
      </div>
      <Link to='/products'>
      <button className='btn'>Back</button>
      </Link>
      </div>

      <div className="cart-table">
        <h3 >Product Image</h3>
        <h3>Product Name</h3>
        <h3>Quantity (In Cartons)</h3>
      </div>

    <div className="cart-table">
    <img src='/Hex-Head-Bolt_Transparent.png' className='cart-image'></img>
        <h3>Hex Bolts(DIN 931)</h3>
        <div className="quantity-adjuster">
      <button onClick={onDecrease} disabled={quantity <= 1}>-</button>
      <span className='quantity'>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>

    </div>
    <div className="quotation">
    <button className='btn'>Get Quotation</button>
    </div>

      

    </div>
    </>
  )
}


