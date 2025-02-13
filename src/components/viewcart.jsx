import React from 'react'
import  { useEffect, useState } from 'react'
import './viewcart.css'
import { cartcontext } from './App'
import { useContext } from 'react'

function Viewcart({}) {
  const{cart,setCart}=useContext(cartcontext)
  const [total,setTotal]=useState(0)
  useEffect(() => {
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0);

   
    const formattedTotal = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(totalAmount);

    setTotal(formattedTotal);
  }, [cart]);

  const removeCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
    };
   
 
  
  return ( 
  <>
    <h1 className="head">Cart items</h1>
    <div className="productcontainer">
     <div className="cart-container">
      
         {cart.map((data)=>(
           <div className="cart-product" key={data.id}>
             <div className="img1">
               <img src={data.pic}></img>
             </div>
             <div className="detail">
               <h3 className='pname'>{data.name}</h3>
               <p className='price'> Price Rs:{data.amt}</p>
               <button   className="cancel-button" onClick={() => removeCart(data.id)}>Cancel</button>
            </div>
 
           </div>
 
         ))
        }
 
       
       
 <h1 className="total">Total: Rs.{total}</h1><button>order</button>
 <p>{}</p>
      
     </div>
     </div>
    
    </>
   )
 }
  


export default Viewcart