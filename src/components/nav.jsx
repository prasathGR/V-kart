import React from 'react'
import './nav.css'
import Home from './home'
import './mobile'
import './furniture'
import './toys'
import './cloth'
import './beauty'
import './viewcart'
import {Link} from "react-router-dom"
export default function Nav ({cart}) {
  return (
  <>
  <div className='navbar1'>
  
    
    <a href='#' className='companyname'>V kart</a>
    
    <div class="col-md-8">

{/* <div class="search">
  <i class="fa fa-search"></i>
  <input type="text" class="form-control" placeholder="search"></input>
  <button class="btn btn-primary">Search</button>
</div> */}

</div>
  
    <Link to={"/viewcart"} className='cart-count'><span className='cart-count'> {cart ? cart.length : 0} </span>View Cart</Link>  
       
    
 
  </div>
  <div className='sec-nav'>
  <li>
     <Link to={""}>Home</Link>
     </li>
    <li>
       <Link to={"/mobile"}>Mobile</Link>  
    </li>
    <li>
    <Link to={"/beauty"}>Beauty</Link>
    </li>
    <li>
    <Link to={"/cloth"}>Cloths</Link>
    </li>
   
    <li>
    <Link to={"/toys"}>Toys</Link>
    </li>
    <li>
     <Link to={"/furniture"}>Furniture</Link>
     </li>
    
    
  </div>

  
  </>
  )
}
