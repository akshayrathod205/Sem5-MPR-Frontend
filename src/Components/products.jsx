import './product.css'
import Productdetail from "./productdetail"
import {  AiOutlineHeart} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'

export default function Products(){
  return(
    <>
    <div className="products">
    <div className='nav'>
      <ul>
        <li>Bolts</li>
        <li>Nuts</li>
        <li>Screws</li>
        <li>Sockets</li>
      </ul>
    <div className='cart'>
      <ul>
      <li><AiOutlineHeart/></li>
      <li><AiOutlineShoppingCart/></li>
      </ul>
    </div>
    </div>
    <p>Home . Products</p>
      <div className="container">
          <div className="productbox">
            <div className="content">
              {
                Productdetail.map((curElm) =>{
                  return(
                <div className="box" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                    <div className="icon">
                      <li><AiOutlineShoppingCart /></li>
                      <li><BsEye /></li>
                      <li><AiOutlineHeart/></li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price}</h4>
                  </div>
                </div>
                  )
                })
              }

            </div>
          </div>
      </div>
    </div>
    
    </>
  )
}