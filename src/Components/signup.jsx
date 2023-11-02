import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../state/appStates";
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // To store the selected type
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNo: "",
    address: "",
    pincode: "",
    city: "",
    userType: "",
    companyName: "",
    companyType: "",
    gstNo: "",
    panNo: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const togglePanel = () => {
    setIsSignUpActive((prevValue) => !prevValue);
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3002/api/v1/auth/consumer/signup", formData)
      .then((res) => {
        console.log(res.data);
        alert("Signup Successful");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    axios
      .post("http://localhost:3002/api/v1/auth/consumer/login", loginData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          const token = response.data.token;
          localStorage.setItem("token", token);
          const storedToken = localStorage.getItem("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            dispatch(setLogin(response.data));
            navigate("/");
          }
        }
      })
      .catch((error) => console.log(error));
  };

  function handleChange(e) {
    setSelectedType(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      userType: e.target.value,
    }));
  }

  const change = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const loginChange = (e, fieldName) => {
    const { value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [fieldName]: value,
    }));
  };

  return (
    <>
      {/* Content */}
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => signupSubmit(e)}>
            <div className="header">
              <button className="ghost" onClick={togglePanel}>
                Back
              </button>
              <h1 className="h1">Create Account</h1>
            </div>
            <div className="flex-container">
              <div className="side1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input"
                  value={formData.firstName}
                  onChange={(e) => change(e, "firstName")}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input"
                  value={formData.lastName}
                  onChange={(e) => change(e, "lastName")}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={formData.email}
                  onChange={(e) => change(e, "email")}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={formData.password}
                  onChange={(e) => change(e, "password")}
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                  className="input"
                  value={formData.contactNo}
                  onChange={(e) => change(e, "contactNo")}
                />
                <textarea
                  className="input"
                  placeholder="Address"
                  name="address"
                  id=""
                  cols="30"
                  rows="2"
                  value={formData.address}
                  onChange={(e) => change(e, "address")}
                ></textarea>
              </div>
              <div className="side2">
                <input
                  className="input"
                  type="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={(e) => change(e, "pincode")}
                />
                <input
                  className="input"
                  type="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => change(e, "city")}
                />
                <select
                  className="type-box my-1"
                  aria-label="Default select example"
                  onChange={(e) => handleChange(e)}
                  value={selectedType}
                >
                  <option default>Type</option>
                  <option value="individual">Individual</option>
                  <option value="company">Company</option>
                </select>

                {selectedType === "company" && (
                  <div className="company-details">
                    <input
                      className="input"
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) => change(e, "companyName")}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="Company Type"
                      value={formData.companyType}
                      onChange={(e) => change(e, "companyType")}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="Pan Number"
                      value={formData.panNo}
                      onChange={(e) => change(e, "panNo")}
                    />
                    <input
                      className="input"
                      type="text"
                      placeholder="GST Number"
                      value={formData.gstNo}
                      onChange={(e) => change(e, "gstNo")}
                    />
                  </div>
                )}

                <button className="sign-button my-2" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => loginSubmit(e)}>
            <h1 className="h1">Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={loginData.email}
              onChange={(e) => loginChange(e, "email")}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={loginData.password}
              onChange={(e) => loginChange(e, "password")}
            />
            <a href="/" className="a">
              Forgot your password?
            </a>
            <button className="button" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1">Welcome Back!</h1>
              <p className="p">Already have an account?</p>
              <button className="ghost" onClick={togglePanel}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1">New Here!</h1>
              <p className="p">Sign up here by entering your details</p>
              <button className="ghost" onClick={togglePanel}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
