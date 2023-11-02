import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./orderdetails.css";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Orderdetails() {
  const navigate = useNavigate();
  const orderId = useParams();
  const [order, setOrder] = useState();

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
        setOrder(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const currentDate = new Date().toLocaleDateString();

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="container">
        {/* Title */}
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2 className="h5 mb-0">
            <Link to="#" className="text-muted"></Link> Order {orderId.id}
          </h2>
        </div>

        {/* Main content */}
        <div className="row">
          <div className="col-lg-8">
            {/* Details */}
            <div className="card mb-4">
              <Paper elevation={6}>
                <div className="card-body">
                  <div className="mb-3 d-flex justify-content-between">
                    <div>
                      <span className="me-3">{currentDate}</span>
                      <span className="me-3">{orderId.id}</span>
                      {/* <span style={{ marginLeft: "320px" }}>Quantity</span> */}
                      <span style={{ marginLeft: "190px" }}>
                        {order.quotation}
                      </span>
                    </div>
                  </div>
                  <table className="table table-borderless">
                    <tbody>
                      {order.orderItems.map((item) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <img
                                      src={`${item.productImage}`}
                                      alt=""
                                      width="35"
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="flex-lg-grow-1 ms-3">
                                    <h6 className="small mb-0">
                                      <Link to="#" className="text-reset">
                                        {item.name}
                                      </Link>
                                    </h6>
                                    <span className="small">
                                      Batch No: {item.batch}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>1</td>
                              {/* <td className="text-end">$79.99</td> */}
                            </tr>
                            ;
                          </>
                        );
                      })}
                      {/* <tr>
                        <td>
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <img
                                src="https://www.bootdey.com/image/280x280/FF69B4/000000"
                                alt=""
                                width="35"
                                className="img-fluid"
                              />
                            </div>
                            <div className="flex-lg-grow-1 ms-3">
                              <h6 className="small mb-0">
                                <Link to="#" className="text-reset">
                                  HexNut (DIN 956)
                                </Link>
                              </h6>
                              <span className="small">Batch No.: 932ff</span>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td className="text-end">$79.99</td>
                      </tr> */}
                    </tbody>
                    <tfoot>
                      {/* <tr>
                        <td colSpan="2">Subtotal</td>
                        <td className="text-end">$159,98</td>
                      </tr>
                      <tr>
                        <td colSpan="2">Shipping</td>
                        <td className="text-end">$20.00</td>
                      </tr>
                      <tr>
                        <td colSpan="2">Discount</td>
                        <td className="text-danger text-end">-$10.00</td>
                      </tr> */}
                      <tr className="fw-bold">
                        <td colSpan="2">TOTAL</td>
                        <td className="text-end">Rs. {order.quotation}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </Paper>
            </div>
            {/* Payment */}
            <div className="card mb-4">
              <Paper elevation={6}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="h6">Payment Method</h3>
                      <p>
                        {order.paymentMethod} <br />
                        Total: Rs. {order.quotation}
                      </p>
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Customer Notes */}
            <div className="card mb-4">
              <Paper elevation={6}>
                <div className="card-body">
                  <h3 className="h6">Thank You for Shopping</h3>
                  <p>
                    We appreciate your business and hope you enjoy your
                    products. If you have any questions or need assistance, feel
                    free to contact our customer support.
                  </p>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderdetails;
