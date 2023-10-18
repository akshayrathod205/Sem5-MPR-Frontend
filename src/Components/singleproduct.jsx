// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Productdetail from "./productdetail";
import "./singleproduct.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Singleproduct = () => {
  const productId = useParams();
  // const selectedProduct = Productdetail.find(product => product.id == productId.id);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
          <Link to="/cart">
            <button className="btn">ADD TO CART</button>
          </Link>
        </div>
      </div>
      <h2 className="size">Size Chart</h2>
      <p className="para">
        Note: Fasteners are also available as per custom dimensions. Please
        contact us with your requirements.
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
