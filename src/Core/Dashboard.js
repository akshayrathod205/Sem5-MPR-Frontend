import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import {
  RiShoppingCart2Line,
  RiUser3Line,
} from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa";

import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [orders, setOrders] = useState();
  const [totalRevenue, setTotalRevenue] = useState();
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    getOrders();
    getUsers();
    getProducts();
  }, []);

  const getProducts = () => {
    setProducts();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/products/",
    }).then((response) => {
      setProducts(response.data.products);
    });
  };

  const getUsers = () => {
    setUsers();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/users/",
    }).then((response) => {
      setUsers(response.data.allUsers);
    });
  };

  const getOrders = () => {
    setOrders();
    axios({
      method: "get",
      url: "https://ecommerceappcj.herokuapp.com/api/orders/",
    }).then((response) => {
      setOrders(response.data.allOrders);
      let rev = 0;
      response.data.allOrders.forEach((order) => {
        rev += order.orderAmount;
      });
      setTotalRevenue(rev);
    });
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="dashboard-home-content" lg={10}>
          <h4>Dashboard</h4>
          <p>Here's an overview of your online business.</p>
          <h4>Quick Links</h4>
          <Row>
            <Col>
              <Card className="dashboard-action-card">
                <IoIosLaptop className="action-icon" />
                <h4>All products</h4>
                <p>
                  <Link to="/products">Click here</Link> to view, remove or edit
                  products
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="dashboard-action-card">
                <FaLaptopMedical className="action-icon" />
                <h4>Add Products</h4>
                <p>
                  <Link to="/products/add">Click here</Link> to add new products
                </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card className="dashboard-action-card">
                <RiShoppingCart2Line className="action-icon" />
                <h4>All Orders</h4>
                <p>
                  <Link to="/orders">Click here</Link> to view, remove or edit
                  orders
                </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
