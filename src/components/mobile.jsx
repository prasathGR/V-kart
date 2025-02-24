import React from 'react'
import  { useState } from 'react'
import mdata from './mobileproduct.json'
import Mobileitem from './mobileitem'
import './mobile.css'
import { cartcontext } from './App'
import { useContext } from 'react'
function Mobile() {
  const [data]=useState(mdata)
  const {cart,setCart}=useContext(cartcontext)
 
  console.log(data)
  return (
    <>
  
  <div className='homecon'>
        {data.map(
           (data)=> (
            <Mobileitem key={data.id} data={data} cart={cart} setCart={setCart} />
           )
        )}
    </div>
    
    </>
  )
}

export default Mobile