// ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Productdetail from './productdetail';
import './singleproduct.css'
import { Slide } from 'react-slideshow-image';


const Singleproduct = ({ match }) => {
  const productId = useParams()
  console.log(productId)
  // Find the product based on productId
  const selectedProduct = Productdetail.find(product => product.id == productId.id);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className='first'>
      <img src={selectedProduct.Img} alt={selectedProduct.Title} className='product-image'/>
      <div className="heading">
      <h2>{selectedProduct.Title}</h2>
      <p>{selectedProduct.Cat}</p>
      <button className='btn'>ADD TO CART</button>
      </div>
      </div>
      <h2 className='size'>Size Chart</h2>
      <p className='para'>Note: Fasteners are also available as per custom dimensions. Please contact us with your requirements.</p>
      <div className="image-section">
      <img src={selectedProduct.Img2} alt={selectedProduct.Title} className='dimension'/>
      </div>
      
    </div>
  );
};

export default Singleproduct;
