// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Productdetail from "./productdetail";
import "./singleproduct.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Singleorder = () => {
  const navigate = useNavigate();
  const orderId = useParams();
  // const selectedProduct = Productdetail.find(product => product.id == productId.id);
  const [selectedProduct, setSelectedProduct] = useState();
  const [formData, setFormData] = useState({
    orderId: orderId.id,
    quotation: "",
  });

  function change(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      quotation: e.target.value,
    }));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    console.log(orderId.id);
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .get(`http://localhost:3002/api/v1/orders/${orderId.id}`, { headers })
      .then((res) => {
        console.log(res.data);
        setSelectedProduct(res.data.order);
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
      .post("http://localhost:3002/api/v1/orders/quotation", formData, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
        alert("Quotation sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleAddToCart = () => {
    setIsSliderOpen(true);
  };

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {selectedProduct.orderItems.map((item, index) => {
        return (
          <>
            <div className="first" style={{ justifyContent: "center" }}>
              <img
                src={`${item.productImage}`}
                style={{ width: "200px", height: "200px", margin: "15px 50px" }}
              />
              <div className="heading">
                <h2>{item.name}</h2>
                <p>{item.type}</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          </>
        );
      })}
      <div className="quotation">
        <input
          type="text"
          placeholder="Enter Quotation Amount"
          onChange={(e) => change(e)}
          value={formData.quotation}
        />
        <button className="cart-btn" onClick={handleSubmit}>
          Send Quotation
        </button>
      </div>
    </>
  );
};

export default Singleorder;
