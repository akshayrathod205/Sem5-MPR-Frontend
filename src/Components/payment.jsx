import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    paymentMethod: "",
    expiry: "",
    cvv: "",
  });
  const [order, setOrder] = useState();

  const change = (e, fieldName) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

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
        setOrder(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const orderId = order._id;
    const paymentMethod = formData.paymentMethod;
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
    const headers = { Authorization: `Bearer ${token}` };
    axios
      .post(
        "http://localhost:3002/api/v1/orders/pay",
        { orderId, paymentMethod },
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Payment done successfully");
        navigate(`/orderdetails/${order._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2 className="payment">Payment Details</h2>

      <div className="payment-form">
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label>Method of payment</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => change(e, "paymentMethod")}
            >
              <option value="card">Card</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          {/* <div className="form-group">
            <label>Shipping Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter the Shipping Address"
            />
          </div> */}

          {formData.paymentMethod === "card" && (
            <>
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  value={formData.expiry}
                  onChange={(e) => change(e, "expiry")}
                  placeholder="MM/YY"
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => change(e, "cvv")}
                  placeholder="CVV"
                />
              </div>
            </>
          )}

          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </>
  );
};

export default Payment;
