import React from 'react'

function Toysitem({tdata}) {
  return (
    <>
    <div className='product'>
        <div className="img">
            <img src={tdata.pic}></img>
        </div>
        <div className="details">
        <h3>{tdata.name}</h3>
        <p>Rs.{tdata.amt}</p>
        
    
          <button >add to cart</button>
        
        </div>
       
    </div>
    </>
  )
}

export default Toysitem