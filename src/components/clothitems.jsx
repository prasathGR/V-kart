import React from 'react'

function Clothitems({cdata}) {
  return (
   <>
  <div className='product'>
        <div className="img">
            <img src={cdata.pic}></img>
        </div>
        <div className="details">
        <h3>{cdata.name}</h3>
        <p>Rs.{cdata.amt}</p>
        
    
          <button >add to cart</button>
        
        </div>
       
    </div>
   </>
  )
}

export default Clothitems