import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";

import "./AddCategory.css";
import { useHistory } from "react-router";

function EditCategory(props) {
  const [categoryData, setCategoryData] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    const categoryId = props.match.params.categoryId;
    axios({
      method: "get",
      url: `https://ecommerceappcj.herokuapp.com/api/`,
    }).then((response) => {
      console.log(response.data.category);
      setCategoryData(response.data.category);
      setImagePreview(
        `https://ecommerceappcj.herokuapp.com/${response.data.category.image}`
      );
    });
  };

  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const imageButtonRef = useRef();
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const history = useHistory();

  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setImage(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setImage(null);
    }
  }

  const editCategory = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="add-category-content" lg={10}>
          <h4>Edit Category</h4>
          <p>
            Please fill the category details in the form below to edit category
            information.
          </p>
          <Card className="add-product-form-card">
            <div className="add-product-input-div">
              <p>Category Name</p>
              <input
                type="text"
                name="name"
                value={categoryData.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="add-category-image-div">
              <div
                onClick={() => {
                  imageButtonRef.current.click();
                }}
                className="category-image-div"
              >
                <Form.Control
                  ref={imageButtonRef}
                  style={{ display: "none" }}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview ? (
                  <img src={imagePreview} alt="preview" />
                ) : (
                  <p>Add category image</p>
                )}
              </div>
            </div>
            <button onClick={editCategory} className="add-category-btn">
              Update Category
            </button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditCategory;
