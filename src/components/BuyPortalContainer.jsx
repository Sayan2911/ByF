import React, { useEffect,useState } from 'react'
import Portal from './Portal'
import CardContaner from './CardContaner'

import { values } from './storage/Storage'
import { useSelector, useDispatch } from 'react-redux'



const BuyPortalContainer = () => {
 
  const count = useSelector((state) => state.counter )

  
  var arr=[...count]
  
  

  
  
  
  


  const unarr=new Set(arr)
  const newArr=Array.from(unarr)



 return (
    <div>

    {

    newArr.map((item)=>(
      <Portal   id={values[item].id} name={values[item].name} desc={values[item].desc} price={values[item].price } delTime={values[item].delTime } url={values[item].url} spec={values[item].spec }  />
     
    ))
    
    }
{/* <CardContaner/> */}
      </div>
  )
  



}


export default  BuyPortalContainer