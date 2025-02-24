import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home'
import './App.css'
import Nav from './nav'
import Mobile from './mobile';
import Furniture from './furniture';
import Toys from './toys';
import Cloth from './cloth';
import Beauty from './beauty';
import Viewcart from './viewcart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
export const cartcontext=createContext();
function App() {
  
  const[cart,setCart] =useState([]);
  return (
    <>
    <cartcontext.Provider value={{cart,setCart}}>
          <BrowserRouter>
    <Nav cart={cart}/>
 <div className='containe'>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/mobile" element={<Mobile/>  }></Route>
    <Route path="/furniture" element={<Furniture/>  }></Route>
    <Route path="/toys" element={<Toys/>  }></Route>
    <Route path="/cloth" element={<Cloth/>  }></Route>
    <Route path="/beauty" element={<Beauty/>  }></Route>
    <Route path='/viewcart' element={<Viewcart/>}></Route>
  </Routes>

 </div>
 </BrowserRouter>
 </cartcontext.Provider>
    </>
  )
}

export default App
