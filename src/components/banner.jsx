import React from 'react'
import './banner.css'

import tools from './img/diytools.jpg'
import shirt from './img/shirt.jpg'
import shoe from './img/shoo.jpg'
import smartphone from './img/smart.jpg'
import nike from './img/nike.jpg'
import tv from './img/sonytv.jpg'
import phone from './img/apple.jpg'
import lap from './img/lenova.jpg'
import sofa from './img/furniture.jpg'

function Banner() {
  
    const img6=tools
    const img7 = shirt
    const img8 =shoe
    const img9 =smartphone
    const shoes =nike
    const sony=tv
    const apple =phone
    const laptop=lap
    const furniture=sofa
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
      <a href='#'>
        <div className='img-cont'>
          <div className='img'>
            <img src={shoes}></img>
            <h2>Shoes</h2>
          </div>
         
        </div>
      </a>
        <a href='#'>
        <div className='img-cont'>
          <div className="img">
          <img src={sony}></img>
          <h2>Tv</h2>

          </div>
       
        </div>
        </a>
        <a href='#'>
        <div className='img-cont'>
          <div className='img'>
          <img src={apple}></img>
          <h2>Mobiles</h2>

          </div>

        </div>
        </a>
        <a href='#'>
        <div className='img-cont'>
          <div className='img'>
          <img src={laptop}></img>
          <h2>Laptops</h2>

          </div>
        </div>
        </a>
        <a href='#'>
        <div className='img-cont'>
          <div className='img'>
          <img src={furniture}></img>
          <h2>Furniture</h2>

          </div>
        </div>
        </a>
    </div>
 
    
   </>
   
  )
}

export default Banner;