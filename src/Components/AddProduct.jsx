import React, { useEffect, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./AddProduct.css";
import { Card } from "@mui/material";

function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    material: "",
    quantity: "",
    type: "",
    size: "",
    batch: "",
    productImage: "",
    dimensionImage: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    // setCategories([]);
    // axios({
    //   method: "get",
    //   url: "https://ecommerceappcj.herokuapp.com/api/categories/",
    // }).then(function (response) {
    //   setCategories(response.data.categories);
    // });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [imagePreview, setImagePreview] = useState("");
  const [dimensionImagePreview, setDimensionImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [dimensionImage, setDimensionImage] = useState(null);
  const imageButtonRef = useRef();
  const dimensionImageButtonRef = useRef();
  const types = ["image/png", "image/jpeg", "image/jpg"];

  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setImage(null);
    }
  }

  function handleDimensionImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setDimensionImage(selectedFile);
      setDimensionImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setDimensionImage(null);
    }
  }

  const change = (e, fieldName) => {
    const { value } = e.target;
    setNewProduct((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const addProduct = async (event) => {
    console.log(newProduct);
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      axios
        .post("http://localhost:3002/api/v1/inventory/admin/", newProduct, {
          headers,
        })
        .then((response) => {
          console.log(response.data);
          alert("Product added successfully");
          setImagePreview("");
          setDimensionImagePreview("");
          setNewProduct({
            name: "",
            material: "",
            quantity: "",
            type: "",
            size: "",
            batch: "",
          });
        });
    } catch (err) {
      console.log("Error : " + err.message);
    }
  };

  const handleProductImage = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=50681270696fa8d1b505621c64ea3b66`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      const link = data.data.url;
      console.log(link);
      setNewProduct((prevFormData) => ({
        ...prevFormData,
        productImage: link,
      }));
    } catch (error) {
      console.error("Error uploading file to ImgBB:", error);
    }
  };

  const handleDimensionImage = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=50681270696fa8d1b505621c64ea3b66`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      const link = data.data.url;
      console.log(link);
      setNewProduct((prevFormData) => ({
        ...prevFormData,
        dimensionImage: link,
      }));
    } catch (error) {
      console.error("Error uploading file to ImgBB:", error);
    }
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col className="add-product-content" lg={10}>
          <h4>Add Product</h4>
          <p>
            Please fill the product details in the form below to add a new
            product.
          </p>
          <Card className="add-product-form-card">
            <Row>
              <Col>
                <div className="add-product-input-div">
                  <p>Product Name</p>
                  <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleChange}
                  ></input>
                </div>
              </Col>
              <Col>
                <div className="add-product-input-div">
                  <p>Product Material</p>
                  <input
                    type="text"
                    name="material"
                    value={newProduct.material}
                    onChange={handleChange}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="add-product-input-div">
                  <p>Product Type</p>
                  <select
                    className="add-product-dropdown"
                    name="type"
                    id="type"
                    value={newProduct.type}
                    onChange={(e) => change(e, "type")}
                  >
                    <option disabled className="add-product-dropdown-option">
                      Please select a product category
                    </option>
                    <option className="add-product-dropdown-option">
                      Hex Bolt
                    </option>
                    <option className="add-product-dropdown-option">
                      U Bolt
                    </option>
                    <option className="add-product-dropdown-option">
                      S Bolt
                    </option>
                    <option className="add-product-dropdown-option">
                      Washers
                    </option>
                    <option className="add-product-dropdown-option">
                      Studs
                    </option>
                    <option className="add-product-dropdown-option">
                      Screws
                    </option>
                    <option className="add-product-dropdown-option">
                      Socket
                    </option>
                    <option className="add-product-dropdown-option">
                      Nuts
                    </option>
                    {categories.map((prodType) => {
                      return (
                        <option
                          className="add-product-dropdown-option"
                          value={prodType.name}
                        >
                          {prodType.name}
                        </option>
                      );
                    })}{" "}
                  </select>
                </div>
              </Col>
              <Col>
                <div className="add-product-input-div">
                  <p>Product Quantity</p>
                  <input
                    type="number"
                    name="quantity"
                    min={0}
                    value={newProduct.quantity}
                    onChange={handleChange}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="add-product-input-div">
                  <p>Product Size</p>
                  <input
                    type="text"
                    name="size"
                    value={newProduct.size}
                    onChange={handleChange}
                  ></input>
                </div>
              </Col>
              <Col>
                <div className="add-product-input-div">
                  <p>Product Batch</p>
                  <input
                    type="text"
                    name="batch"
                    value={newProduct.batch}
                    onChange={handleChange}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="add-product-image-div">
                  <div
                    onClick={() => {
                      dimensionImageButtonRef.current.click();
                    }}
                    className="product-image-div"
                  >
                    <Form.Control
                      ref={dimensionImageButtonRef}
                      style={{ display: "none" }}
                      type="file"
                      name="dimensionImage"
                      accept="image/*"
                      onChange={(e) => handleDimensionImage(e)}
                    />
                    {dimensionImagePreview ? (
                      <img src={dimensionImagePreview} alt="preview" />
                    ) : (
                      <p>Add Dimension image</p>
                    )}
                  </div>
                </div>
              </Col>
              <Col>
                <div className="add-product-image-div">
                  <div
                    onClick={() => {
                      imageButtonRef.current.click();
                    }}
                    className="product-image-div"
                  >
                    <Form.Control
                      ref={imageButtonRef}
                      style={{ display: "none" }}
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => handleProductImage(e)}
                    />
                    {imagePreview ? (
                      <img src={imagePreview} alt="preview" />
                    ) : (
                      <p>Add product image</p>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
            <button onClick={(e) => addProduct(e)} className="add-product-btn">
              Add Product
            </button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AddProduct;
