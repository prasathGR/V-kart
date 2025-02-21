import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

import './home'
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  return (
    <>
    <div className='foot'>
    <button
        onClick={scrollToTop}
        className="scroltop"
      >
        Back to Top
      </button>
      <div className='footer-details'>
           <div className='footerhead'>
              <h5 className='fcolor'>Get to know as</h5>
              <li>
              <Link>About V kart</Link>
              </li>
              <li>
              <Link>Press Realeases</Link>
              </li>
              <li>
              <Link>V kart Science</Link>
              </li>
              <li>
              <Link>Career</Link>
              </li>
           </div>
           <div className='footerhead'>
            <h5 className='fcolor'>Connect with us</h5>
           
            <li>
              <Link>Facebook</Link>
              </li>
              <li>
              <Link>Twitter</Link>
              </li>
              <li>
              <Link>Instagram</Link>
              </li>
              
    
           </div>
           <div className='footerhead'>
            <h5 className='fcolor'>Make money with us</h5>
            <li>
              <Link>Sell on V kart</Link>
              </li>
              <li>
              <Link>Supply to v cart</Link>
              </li>
              <li>
              <Link>Fullfillment by V kart</Link>
              </li>
              <li>
              <Link>Advertise your product</Link>
              </li>
              <li>
              <Link>Protect and built your brand</Link>
              </li>

           </div>
           <div className='footerhead'>
            <h5 className='fcolor'>Let us help you</h5>
            <li>
              <Link>Your Account</Link>
              </li>
              <li>
              <Link>Return Center</Link>
              </li>
              <li>
              <Link>100% purchace safety</Link>
              </li>
              <li>
              <Link>V cart App download</Link>
              </li>
              <li>
              <Link>Help</Link>
              </li>
              

           </div>
         
      </div>
      <h1 className='footname'> V kart</h1>
     
  </div>
  <div className='copyrights'>
       <p>Conditions of Use  &ensp; & &ensp;Sale Privacy Notice Interest-Based Ads</p>
       <p>© 2024-2025, Vkart.com, Inc. or its affiliates</p>
     </div>
    </>
  )
}
