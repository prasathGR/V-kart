import React from 'react'
import './banner.css'

import pick6 from './img/pos.jpg'
import pick7 from './img/shirt.jpg'
import pick8 from './img/shoo.jpg'
import pick9 from './img/smart.jpg'

function Banner() {
  
    const img6=pick6
    const img7 = pick7
    const img8 =pick8
    const img9 =pick9
   
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

   </>
   
  )
}

export default Banner;