import React, { useState } from "react";
// import Productdetail from "./productdetail";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./product.css";
import { useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [Productdetail, setProductdetail] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? Productdetail.filter((item) => item.Cat === selectedCategory)
    : Productdetail;

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/products/")
      .then((res) => {
        console.log(res.data);
        setProductdetail(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(Productdetail);
  }, [Productdetail]);

  return (
    <>
      <div className="products">
        <div className="nav">
          <ul>
            <li onClick={() => handleCategoryClick(null)}>All</li>
            <li onClick={() => handleCategoryClick("Bolts")}>Bolts</li>
            <li onClick={() => handleCategoryClick("Nuts")}>Nuts</li>
            <li onClick={() => handleCategoryClick("Screws")}>Screws</li>
            <li onClick={() => handleCategoryClick("Sockets")}>Sockets</li>
          </ul>
          <div className="cart">
            <ul>
              <li>
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
        </div>
        <p>Home . Products</p>
        <div className="product-container">
          <div className="productbox">
            <div className="content">
              {filteredProducts.map((curElm) => {
                return (
                  <div className="box" key={curElm._id}>
                    <div className="img_box">
                      <img src={curElm.productImage} alt={curElm.name} />
                      <div className="icon">
                        <li>
                          <AiOutlineShoppingCart />
                        </li>
                        <li>
                          <Link to={`/products/${curElm._id}`}>
                            <BsEye />
                          </Link>
                        </li>
                      </div>
                    </div>
                    <div className="detail">
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
