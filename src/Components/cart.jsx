import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import "./cart.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [Productdetail, setProductdetail] = useState([]);

  const onIncrease = () => {
    setQuantity(quantity + 1);
  };

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    const headers = { Authorization: `Bearer ${token}` };
    console.log(Productdetail);
    axios
      .get("http://localhost:3002/api/v1/cart/", { headers })
      .then((res) => {
        console.log(res.data.products);
        setProductdetail(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .post("http://localhost:3002/api/v1/orders/", { headers })
      .then((res) => {
        console.log(res);
        alert("Quotation sent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="cart-container">
        <div className="top">
          <div className="head">
            <div className="cart-icon">
              <AiOutlineShoppingCart />
            </div>
            <h1 className="cart-heading">Cart</h1>
          </div>
          <Link to="/products">
            <button className="btn">Back</button>
          </Link>
        </div>

        <p className="note">Note: 1 carton weighs 22kg. Fasteners are solely sold based on number of cartons and not individual items. </p>

        <div className="cart-table">
          <h3>Product Image</h3>
          <h3>Product Name</h3>
          <h3>Quantity (In Cartons)</h3>
        </div>
        {Productdetail.map((item) => {
          return (
            <>
              <div className="cart-table">
                <img src={item.productImage} className="cart-image"></img>
                <h3>{item.name}</h3>
                <div className="quantity-adjuster">
                  <button onClick={onDecrease} disabled={quantity <= 1}>
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button onClick={onIncrease}>+</button>
                </div>
              </div>
            </>
          );
        })}

        {/* <div className="cart-table">
          <h3>Product Image</h3>
          <h3>Product Name</h3>
          <h3>Quantity (In Cartons)</h3>
        </div>

        <div className="cart-table">
          <img
            src="/Hex-Head-Bolt_Transparent.png"
            className="cart-image"
          ></img>
          <h3>Hex Bolts(DIN 931)</h3>
          <div className="quantity-adjuster">
            <button onClick={onDecrease} disabled={quantity <= 1}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button onClick={onIncrease}>+</button>
          </div>
        </div> */}
        <div className="quotation">
          <button className="cart-btn" onClick={handleSubmit}>
            Get Quotation
          </button>
        </div>
      </div>
    </>
  );
}
