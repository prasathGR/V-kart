import React from 'react'
import './nav.css'
import Banner from './banner'
export default function Nav () {
  return (
  <>
  <div className='navbar'>
  
    <li>
    <a href='#' className='companyname'>V kart</a>
    </li>
    <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" class="form-control" placeholder="search"></input>
        <button class="btn btn-primary">Search</button>
    </div>
    <li>
        <a href='#'> View Cart</a>
    </li>
 
  </div>
  <div className='sec-nav'>
    <li>
        <a href=''>Mobiles</a>
    </li>
    <li>
        <a href=''>Fashion</a>
    </li>
    <li>
        <a href=''>HomeAppliance</a>
    </li>
    <li>
        <a href=''>Furniture</a>
    </li>
    <li>
        <a href=''>Books</a>
    </li>
    <li>
        <a href=''>Furniture</a>
    </li>
    
  </div>
<Banner></Banner>
  
  </>
  )
}
