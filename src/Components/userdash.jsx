import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Userdash() {
  const [orderDetails, setOrderDetails] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get("http://localhost:3002/api/v1/orders/user", { headers })
      .then((res) => {
        console.log(res.data.order);
        setOrderDetails(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    navigate(`/payment/${orderDetails._id}`);
  };

  if (!orderDetails) return null;

  return (
    <>
      <div className="cart-container">
        <div className="top">
          <div className="head">
            <div className="cart-icon">
              <AiOutlineShoppingCart />
            </div>
            <h1 className="cart-heading">Your Orders</h1>
          </div>
          <button className="btn">Back</button>
        </div>
        <div className="cart-table">
          <h3>Product Image</h3>
          <h3>Product Name</h3>
          <h3>Quantity (In Cartons)</h3>
        </div>
        {orderDetails.orderItems.map((item) => {
          return (
            <>
              <div className="cart-table">
                <img src={`${item.productImage}`} className="cart-image"></img>
                <h3>{item.name}</h3>
                <h3>{item.quantity}</h3>
              </div>
            </>
          );
        })}
        <div className="grand-total">
          <h3>
            Grand Total: <span>{orderDetails.quotation}</span>
          </h3>
        </div>
        <div className="quotation">
          <button className="btn" onClick={handleSubmit}>
            Pay
          </button>
        </div>
      </div>
    </>
  );
}
