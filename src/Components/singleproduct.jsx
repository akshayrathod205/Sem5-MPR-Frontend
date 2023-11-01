// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Productdetail from "./productdetail";
import "./singleproduct.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Singleproduct = () => {
  const navigate = useNavigate();
  const productId = useParams();
  // const selectedProduct = Productdetail.find(product => product.id == productId.id);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/v1/products/${productId.id}`)
      .then((res) => {
        console.log(res.data);
        setSelectedProduct(res.data.product);
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
    <div>
      <div className="first">
        <img
          src={selectedProduct.productImage}
          alt={selectedProduct.name}
          className="product-image"
        />
        <div className="heading">
          <h2>{selectedProduct.type}</h2>
          <p>{selectedProduct.type}</p>
          <button className="cart-btn" onClick={handleSubmit}>
            ADD TO CART
          </button>
        </div>
      </div>
      <h2 className="size">Size Chart</h2>
      <p className="para">
        Note: Fasteners are also available as per custom dimensions. Please
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <span style={{ padding: "5px" }}>contact</span>
        </Link>{" "}
        us with your requirements.
      </p>
      <div className="image-section">
        <img
          src={selectedProduct.dimensionImage}
          alt={selectedProduct.name}
          className="dimension"
        />
      </div>
    </div>
  );
};

export default Singleproduct;
