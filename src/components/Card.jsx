import React, { useState } from 'react'
import Portal from './Portal'
import { values } from './storage/Storage'
import { CardClick } from '../Onclick'
import { useSelector, useDispatch } from 'react-redux'

// import { cartVal, showVal } from '../redux/slices/counter/Counter'

const Card = ({id,name,desc,price,delTime,url,spec,flag}) => {
 
  (delTime>1) ?spec=("hours") : spec=("hour")


 

  return (

    <div className=' w-80 h-max border rounded-2xl py-4' >
        <img src={url} alt=""  className='border h-48 w-auto m-auto  my-5 rounded-md '  />
        <h4 className='text-xl w-40 m-auto uppercase' >{name}</h4>
        <p className='text-md w-72 m-auto break-words'> <i>{desc}  </i></p>
        <p className='w-40 m-auto'>price: {price}</p>
        <p className='text-red-500 w-40 m-auto'>delivery time: upto {delTime} {spec}</p>
        <button id='cartBtn' onClick={()=>{ document.getElementById("cartBtn").innerHTML="added to cart" }} >Add to Cart</button>
    </div>
  )
}

export default Card
