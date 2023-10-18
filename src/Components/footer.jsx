import './footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';



export default function Footer(){
  return(
    <>
    <div className="footer">
      <div className="company">
        <h4>COMPANY</h4>
        <p>We are India's premier manufacturers of Cold Forged Stainless Steel and Alloy Steel Fasteners such as Bolts, Nuts, Studs, Screws etc. Also various high Nickel and other exotic MOC's are manufactured with completely In-house state-of-the-art facilities</p>
        <span><BsFillArrowRightCircleFill/></span>
        <h5>FIT RIGHT © 2015</h5>
      </div>
      <div className="sections">
        <h4>SECTIONS</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact Us</li>
          <li>Log In</li>
        </ul>
      </div>
      <div className="contact">
        <div className="phone">
          <BsFillTelephoneFill/>
          <h4>+91-22-66157219 / 20</h4>
        </div>
        <div className="email">
        <GrMail/>
        <h4>sales@fitright.com</h4>
        </div>

      </div>
    </div>
    
    
    </>
  )
}
