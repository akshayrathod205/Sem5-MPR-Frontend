import React from 'react'
import '../assets/CSS/about.css'
import nuts from '../assets/nuts.png'

const About = () => {
  return (
    <section className='hero'>
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="containing">
        <div className="hero-content">
          <h2>Welcome to Our Website</h2>
          <p>India's premier manufacturer of cold forged stainless steel and alloy steel fasteners. We offer a wide range of fasteners, including bolts, nuts, studs, and screws. We are ISO 9001-2008 certified and committed to efficiency, quality, cost, and delivery.

            Here are some of the key points from the description:

            The company is a leading manufacturer of cold forged stainless steel and alloy steel fasteners.
            They have a wide range of products, including bolts, nuts, studs, and screws.
            They are ISO 9001-2008 certified, which means that they have a high level of quality control.
            They are committed to efficiency, quality, cost, and delivery.</p>
          <button className='cta-button'>Learn More</button>
        </div>
        <div className="hero-image">
          <img src={nuts} alt="" className='Nuts-img' />
        </div>
      </div>
    </section>
  )
}

export default About
