import React from 'react'
import Furnitureitem from './furnitureitem'
import furniture from './furniture.json'
import './furniture.css'
import { useState } from 'react'
import { cartcontext } from './App'
import { useContext } from 'react'
function Furniture() {
  const [fdata]=useState(furniture)
  const {cart,setCart}=useContext(cartcontext)
    
  return (
    <>
     <div className='homecon'>
        {fdata.map(
           (fdata)=> (
            <Furnitureitem key={fdata.id} fdata={fdata} cart={cart} setCart={setCart} />
           )
        )}
    </div>
    </>
  )
}

export default Furniture