import React from 'react'



function Beautyitems({bdata,cart,setCart}) {
  const addCart=()=>{
    setCart([...cart, bdata]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!== bdata.id));
  }
  return (
   <>
     <div className='product'>
        <div className="img">
            <img src={bdata.pic}></img>
        </div>
        <div className="details">
        <h3>{bdata.name}</h3>
        <p>Rs.{bdata.amt}</p>
        
    
        {
        cart.includes(bdata)?(<button className="btn-remove" onClick={removeCart} >remove the cart</button>)
        :(
          <button onClick={addCart}>add to cart</button>
        )
      }
        
        </div>
       
    </div>
   </>
  )
}

export default Beautyitems