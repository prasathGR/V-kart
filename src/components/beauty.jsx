import React, { useContext } from 'react'
import beauty from './beauty.json'
import Beautyitems from './beautyitems'
import { useState } from 'react'
import { cartcontext } from './App'

function Beauty() {
  const [bdata]=useState(beauty)
  const {cart,setCart}=useContext(cartcontext)
  return (
   <>
 <div className='homecon'>
        {bdata.map(
           (bdata)=> (
            <Beautyitems key={bdata.id} bdata={bdata} cart={cart} setCart={setCart} />
           )
        )}
    </div>
   </>
  )
}

export default Beauty