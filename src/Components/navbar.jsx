import './nav.css'

export default function Navbar(){
  return(
    <>
    <div className="container">
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png"/>
      </div>
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact Us</li>
        <li>Log In</li>
      </ul>
    </div>
    </div>

    </div>
    </>
  )
}