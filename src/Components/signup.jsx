import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Content = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [selectedType, setSelectedType] = useState(''); // To store the selected type


    const togglePanel = () => {
        setIsSignUpActive((prevValue) => !prevValue);
    };
    const navigate = useNavigate()
    function handleClick() {
        navigate("/Details")
    }

    function handleChange(e) {
        setSelectedType(e.target.value);
    }


    return (
        <>
            {/* Content */}
            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    <form action="/">
                    <h1 className='h1'>Create Account</h1>
                    <div className="flex-container">
                    <div className='side1'>
                        <input type="text" placeholder="Name" className='input'/>
                        <input type="email" placeholder="Email" className='input' />
                        <input type="password" placeholder="Password" className='input' />
                        <input type="tel" placeholder="Contact Number" pattern='[0-9]{4}[0-9]{3}[0-9]{3}' className='input' />
                        <textarea className='input' placeholder='Address' name="address" id="" cols="30" rows="2"></textarea>
                    </div>
                    <div className='side2'>
                        <input className='input' type="pincode" placeholder='Pincode' />
                         <input className='input' type="city" placeholder='City' />
                         <select className="type-box my-1" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                                    <option default>Type</option>
                                    <option value="individual">Individual</option>
                                    <option value="company">Company</option>
                                </select>

                                {selectedType === 'company' && (
                                    <div className="company-details">
                                        <input className='input' type="text" placeholder='Company Name' />
                                        <input className='input' type="text" placeholder='Company Type' />
                                        <input className='input' type="text" placeholder='Pan Number' />
                                        <input className='input' type="text" placeholder='GST Number' />

                                    </div>
                                )}

                        <button onClick={handleClick} className='sign-button my-2'>Sign Up</button>
                        </div>

                    </div>
                   
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
