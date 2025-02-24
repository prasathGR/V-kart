import React from 'react'

function Clothitems({cdata,cart,setCart}) {
  const addCart=()=>{
    setCart([...cart, cdata]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!== cdata.id));
  }
  return (
   <>
  <div className='product'>
        <div className="img">
            <img src={cdata.pic}></img>
        </div>
        <div className="details">
        <h3>{cdata.name}</h3>
        <p>Rs.{cdata.amt}</p>
        
        {
        cart.includes(cdata)?(<button className="btn-remove" onClick={removeCart} >remove the cart</button>)
        :(
          <button onClick={addCart}>add to cart</button>
        )
      }
        
        </div>
       
    </div>
   </>
  )
}

export default Clothitems