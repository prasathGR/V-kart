import React from 'react'
import './furnitureitem.css'
function Furnitureitem({fdata ,cart,setCart}) {
  const addCart=()=>{
    setCart([...cart, fdata]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!== fdata.id));
  }
  return (
    <>
    <div className='product'>
        <div className="img">
            <img src={fdata.pic}></img>
        </div>
        <div className="details">
        <h3>{fdata.name}</h3>
        <p>Rs.{fdata.amt}</p>
        
    
        {
        cart.includes(fdata)?(<button className="btn-remove" onClick={removeCart} >remove the cart</button>)
        :(
          <button onClick={addCart}>add to cart</button>
        )
      }
        
        </div>
       
    </div>
    </>
  )
}

export default Furnitureitem