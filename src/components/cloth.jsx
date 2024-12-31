import React from 'react'
import cloth from './cloths.json'
import './clothitems'
import Clothitems from './clothitems'
function Cloth() {
    const cdata=cloth
  return (
  <>
<div className='homecon'>
        {cdata.map(
           (cdata)=> (
            <Clothitems key={cdata.id} cdata={cdata} />
           )
        )}
    </div>
  </>
  )
}

export default Cloth