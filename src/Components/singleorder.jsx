// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Productdetail from "./productdetail";
import "./singleproduct.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField'

const Singleorder = () => {
  const navigate = useNavigate();
  const orderId = useParams();
  // const selectedProduct = Productdetail.find(product => product.id == productId.id);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
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
    console.log(selectedProduct);
    const productId = selectedProduct._id;
    const name = selectedProduct.name;
    const productImage = selectedProduct.productImage;
    const type = selectedProduct.type;
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .post(
        "http://localhost:3002/api/v1/cart/",
        { productId, name, productImage, type },
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Product added to cart");
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
            return(
                <>
                <div className="first">
                    <img src='/din-931.png'/>
                    <div className="heading">
                        <h2>Hex Bolt</h2>
                        <p>Bolt</p>
                    </div>
                </div>
        
                
                </>
            )
       
    })}
    <div className="quotation">
    <input type="text" placeholder="Enter Quotation Amount"></input>
    <button className="cart-btn">Send Quotation</button>

    </div>
    </>
    );
    
};

export default Singleorder;
