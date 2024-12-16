import React from 'react'
import Furnitureitem from './furnitureitem'
import furniture from './furniture.json'
import './furniture.css'
function Furniture() {

    const fdata=furniture
  return (
    <>
     <div className='homecon'>
        {fdata.map(
           (fdata)=> (
            <Furnitureitem key={fdata.id} fdata={fdata} />
           )
        )}
    </div>
    </>
  )
}

export default Furniture