import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './landing.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  marginRight: '100px',
  height:'200px',
  width:'550px',
  marginTop:'50px'
}

const divStyle = {
  display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  backgroundSize: 'cover',
  height: '550px'
}
const slideImages = [
  {
    url: 'https://t3.ftcdn.net/jpg/05/29/32/18/360_F_529321883_3D9Xv7o3l97rvyus9widIUBQQHF77YqE.jpg',
  },
  {
    url: 'https://media.istockphoto.com/id/170112853/photo/nuts-and-bolts.jpg?s=612x612&w=0&k=20&c=5oc7Sw6ZJ8mSF18aL_fPOE-PZPD34Sz52bdkeERkZW4=',
  },
  {
    url: 'https://t4.ftcdn.net/jpg/00/81/66/65/360_F_81666592_ECSuDiG1mdoJtAkZNArhvkjhCaygW8Ja.jpg',
  },
];


export default function Landing(){
  return(
    <>
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span><img src='/FITRIGHT.png' style={spanStyle}/></span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className="about-container">
        <div className="box">
        <div className="heading">
          <h1>ABOUT</h1>
        </div>
        <div className="about-info">
          <div className='info'>
            <p>We are India's premier manufacturers of Cold Forged Stainless Steel and Alloy Steel Fasteners such as Bolts, Nuts, Studs, Screws etc. Also various high Nickel and other exotic MOC's are manufactured with completely In-house state-of-the-art facilities. Our key point is Ex-Stock availability of more than 5000 types of fasteners and we are constantly developing new range of fasteners.</p>
            <button>SEE PRODUCTS</button>
          </div>
          <div className="image">
            <img src='/washers.jpg'/>
          </div>

        </div>

        </div>

      </div>
    </>
  )
}