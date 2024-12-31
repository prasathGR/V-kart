import React from 'react'
import toys from './toys.json'
import Toysitem from './toysitem'
function Toys() {
    const tdata=toys

  return (
    <>
     <div className='homecon'>
        {tdata.map(
           (tdata)=> (
            <Toysitem key={tdata.id} tdata={tdata} />
           )
        )}
    </div>
    </>
  )
}

export default Toys