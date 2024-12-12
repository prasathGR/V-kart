import React from 'react'
import './banner.css'
import pick from './img/lap.jpg'
import pick2 from './img/tv.jpg'
import pick3 from './img/phone.jpg'
import pick4 from './img/sofa.jpg'
import pick5 from './img/shirt.jpg'

function Banner() {
    const img =pick
    const img2 =pick2
    const img3 =pick3
    const img4 =pick4
    const img5 =pick5

  return (
   <>
   <div className='container1'>
   
    <img src={img}></img>
    <img src={img2}></img>
    <img src={img3}></img>
    <img src={img4}></img>
    <img src={img5}></img>

   
    </div>

   </>
  )
}

export default Banner;