import React from 'react'
import mdata from './mobileproduct.json'
import Mobileitem from './mobileitem'
import './mobile.css'
function Mobile() {
  const data =mdata
  console.log(data)
  return (
    <>
  
  <div className='homecon'>
        {data.map(
           (data)=> (
            <Mobileitem key={data.id} data={data} />
           )
        )}
    </div>
    
    </>
  )
}

export default Mobile