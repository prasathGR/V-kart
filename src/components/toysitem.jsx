import React from 'react'

function Toysitem({tdata,cart,setCart}) {
  const addCart=()=>{
    setCart([...cart, tdata]);
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!== tdata.id));
   
  }
  const rupees = new Intl.NumberFormat("en-US").format(tdata.amt);
  return (
    <>
    <div className='product'>
        <div className="img">
            <img src={tdata.pic}></img>
        </div>
        <div className="details">
        <h3>{tdata.name}</h3>
        <p>Rs.{rupees}</p>
        
    
        {
        cart.includes(tdata)?(<button className="btn-remove" onClick={removeCart} >remove the cart</button>)
        :(
          <button onClick={addCart}>add to cart</button>
        )
      }
        
        </div>
       
    </div>
    </>
  )
}

export default Toysitem