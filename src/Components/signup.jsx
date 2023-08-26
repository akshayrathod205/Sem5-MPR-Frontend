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

    return (
        <>
            {/* Content */}
            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className='h1'>Create Account</h1>
                        <input type="text" placeholder="Name" className='input'/>
                        <input type="email" placeholder="Email" className='input' />
                        <input type="password" placeholder="Password" className='input'/>
                        <input type="tel" placeholder="Contact Number" pattern='[0-9]{4}[0-9]{3}[0-9]{3}' className='input'/>
                        <button onClick={handleClick} className='button'>Next</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className='h1'>Sign In</h1>
                        <input type="email" placeholder="Email" className='input'/>
                        <input type="password" placeholder="Password" className='input'/>
                        <a href="#" className='a'>Forgot your password?</a>
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