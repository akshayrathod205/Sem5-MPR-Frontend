import './nav.css'
import {Link} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function Navbar(){
  return(
    <>
    <div className="nav-container">
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png"/>
      </div>
    <div className="nav-list">
      <ul>
        <li>
          <Link to='/' className='link'>Home</Link></li>
        <li>
        <Link to='/about' className='link'>About</Link>
        </li>
        <li>
        <Link to='/products' className='link'>Products</Link>
        </li>
        <li>
        <Link to='/contact' className='link'>Contact Us</Link>
        </li>
        <button>
        <Link to='/log_in' className='btn'>Log In</Link>
        </button>
      </ul>
    </div>
    </div>
    </div>


    </>
  )
}