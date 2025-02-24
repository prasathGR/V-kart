import React from 'react'
import cloth from './cloths.json'
import './clothitems'
import Clothitems from './clothitems'
import { useState } from 'react'
import { cartcontext } from './App'
import { useContext } from 'react'
function Cloth() {
  
  const [cdata]=useState(cloth)
  const {cart,setCart}=useContext(cartcontext)
    
  return (
  <>
<div className='homecon'>
        {cdata.map(
           (cdata)=> (
            <Clothitems key={cdata.id} cdata={cdata} cart={cart} setCart={setCart}/>
           )
        )}
    </div>
  </>
  )
}

export default Cloth