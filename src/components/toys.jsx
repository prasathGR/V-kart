import React from 'react'
import toys from './toys.json'
import Toysitem from './toysitem'
import { useState } from 'react'
import { cartcontext } from './App'
import { useContext } from 'react'
function Toys() {
  const [tdata]=useState(toys)
  const {cart,setCart}=useContext(cartcontext)
   

  return (
    <>
     <div className='homecon'>
        {tdata.map(
           (tdata)=> (
            <Toysitem key={tdata.id} tdata={tdata} cart={cart} setCart={setCart}/>
           )
        )}
    </div>
    </>
  )
}

export default Toys