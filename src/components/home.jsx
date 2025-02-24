import React from 'react'
import './home.css'
import tools from './img/diytools.jpg'
import shirt from './img/shirt.jpg'
import shoe from './img/shoo.jpg'
import smartphone from './img/smart.jpg'
import cos from './img/cosmetics.jpg'
import tv from './img/cloths.avif'
import phone from './img/apple.jpg'
import lap from './img/toy.avif'
import sofa from './img/furniture.jpg'
import mx from './img/mx.jpg'
import iqoo from './img/iqoo.png'
import apple15 from './img/apple15.jpg'
import redmi from './img/redmi.png'
import samsung from './img/samsung.jpeg'
import realme from './img/realme.png'
import oneplus from './img/oneplus.png'
import poco from './img/poco.png'
import techno from './img/techno.png'
import samsungm32 from './img/samsungm32.png'
import oneplusnord from './img/oneplusnord.png'
import {Link} from "react-router-dom"
import  './mobile'
import './furniture'
import './beauty'
import './cloth'
import './toys'
import './footer'
import Footer from './footer'
function Home() {
  const oneplusnordpick=oneplusnord
  const samsungm32pick =samsungm32
  const pocopick =poco
  const technopick=techno
  const realmepick =realme
  const samsungpick =samsung
  const onepluspick =oneplus
  const redmipick =redmi
  const applepick =apple15
     const iqoopick=iqoo
    const img6=tools
    const img7 = shirt
    const img8 =shoe
    const img9 =smartphone
    const shoes =cos
    const sony=tv
    const apple =phone
    const laptop=lap
    const furniture=sofa
    const Mx=mx
  return (
   <>

   <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Change interval in milliseconds (3000ms = 3s)
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img6}
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img7}
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img8}
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img9}
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
     
    </div>
 
    <div className='container'>
    <Link to={"/beauty"}>
        <div className='img-cont'>
          <div className='img'>
            <img src={shoes}></img>
            <h2>Beauty</h2>
          </div>
         
        </div>
        </Link>
        
        <Link to={"/cloth"}>
        <div className='img-cont'>
          <div className="img">
          <img src={sony}></img>
          <h2>Cloth</h2>

          </div>
       
        </div>
        </Link>
        
        <Link to={"/mobile"}>
        <div className='img-cont'>
          <div className='img'>
          <img src={apple}></img>
          <h2>Mobiles</h2>

          </div>

        </div>
        </Link>
        <Link to={"/toys"}>
        <div className='img-cont'>
          <div className='img'>
          <img src={laptop}></img>
          <h2>Toys</h2>

          </div>
        </div>
        </Link>
        
        <Link to={"/furniture"}>
        <div className='img-cont'>
          <div className='img'>
          <img src={furniture}></img>
          <h2>Furniture</h2>

          </div>
        </div>
        </Link>
        
    </div>
    <div className='deal'>
    <div className='deal-img'>
    <img src="https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Portkey/New_design/stripes/04.jpg" alt="" />
   
    </div>
    </div>
    <div className='mainitem'>
        
     <div className='mainitems'>
     <img src={applepick}></img>

     </div>
     <div className='mainitems '>
     <img src={iqoopick}></img>

     </div>
     <div className='mainitems'>
     <img src={redmipick}></img>
     </div>
     <div className='mainitems'>
     <img src={onepluspick}></img>
     </div>
     <div className='mainitems'>
     <img src={samsungpick}></img>
     </div>
     <div className='mainitems'>
     <img src={realmepick}></img>
     </div>
     <div className='mainitems'>
     <img src={technopick}></img>
     </div>
      <div className='mainitems'>
      <img src={pocopick}></img>
     </div>
     <div className='mainitems'>
     <img src={samsungm32pick}></img>
     </div>



    

    </div>
  
    <Footer/>
   </>
   
   
  )
}

export default Home;