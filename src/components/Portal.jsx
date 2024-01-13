import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'


const Portal = ({id,name,desc,price,delTime,url,spec}) => {
  const [number,setNumber]=useState(1)
 const [cart,setCartVal]=useState(number)
  const add=()=>{setNumber(number+1) }
  const sub=()=>{ setNumber(number-1) ;}

  console.log(number);
  console.log(cart);
 

 


(delTime>1) ?spec=("hours") : spec=("hour")


  if(number){
  return (
 <>
   <div className='  h-max w-1/2 border rounded-2xl p-4 m-5 '>
   <div className='  h-max w-full grid  lg:grid-cols-2 rounded-2xl p-4' >
      <img src={url} alt=""  className='border h-48 w-auto m-auto  my-5 rounded-md '  />
        <div className='grid lg:justify-items-start  py-4 lg:text-left'>
        
        <h4 className='text-xl w-40 sm:max-lg:m-auto  uppercase' >{name}</h4>
        <p className='text-md w-full m-auto break-words'> <i>{desc}  </i></p>
        <p className='w-40 sm:max-lg:m-auto'>price: {price}</p>
        <p className='text-red-500 w-40 sm:max-lg:m-auto'>delivery time: upto {delTime} {spec}</p> 
        </div>
       
    </div>
    <div className='flex justify-center'>
    <button onClick={add}>+</button>
    <div className=' w-10 flex justify-center items-center'>{number}</div>
    <button onClick={sub}>-</button>
    </div>
   </div>
    </>
  )
}}

export default Portal