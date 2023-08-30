import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Content = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const togglePanel = () => {
        setIsSignUpActive((prevValue) => !prevValue);
    };
    const navigate = useNavigate()
    function handleClick() {
        navigate("/Details")
    }
    const [selectedType, setSelectedType] = useState(''); // State to keep track of selected type

    const handleChange=(e) =>{
        const getValue = e.target.value
        console.log(getValue)
        if(getValue===2){
            const showDetails ={
                
            }
        }
    }

    return (
        <>
            {/* Content */}
            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    <form action="/">
                        <h1 className='h1'>Create Account</h1>
                        <input type="text" placeholder="Name" className='input' />
                        <input type="email" placeholder="Email" className='input' />
                        <input type="password" placeholder="Password" className='input' />
                        <input type="tel" placeholder="Contact Number" pattern='[0-9]{4}[0-9]{3}[0-9]{3}' className='input' />
                        <textarea className='input' placeholder='Address' name="address" id="" cols="30" rows="2"></textarea>
                        <div className='inputfield my-1'>
                            <input className='input-new' type="pincode" placeholder='Pincode' />
                            <input className='input-new' type="city" placeholder='City' />
                        </div>
                        <select className="type-box my-1" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                            <option disabled selected>Type</option>
                            <option value="1">Induvidual</option>
                            <option value="2">Company</option>
                        </select>
                        <div className="company-details my-2">
                            <input type="company-name" className="input-company" placeholder='Company Name' />
                            <input type="type" className="input-company" placeholder='Company type' />{/* To be changed*/}
                        </div>
                        <div className="company-details">
                            <input type="gst_no" className="input-company" placeholder='Gst No.' />
                            <input type="pan_no" className="input-company" placeholder='PAN No.' />
                        </div>

                        <button onClick={handleClick} className='button my-2'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="/">
                        <h1 className='h1'>Sign In</h1>
                        <input type="email" placeholder="Email" className='input' />
                        <input type="password" placeholder="Password" className='input' />
                        <a href="/" className='a'>Forgot your password?</a>
                        <button className='button'>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className='h1'>Welcome Back!</h1>
                            <p className='p'>Already have an account?</p>
                            <button className="ghost" onClick={togglePanel}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className='h1'>New Here!</h1>
                            <p className='p'>Sign up here by entering your details</p>
                            <button className="ghost" onClick={togglePanel}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;