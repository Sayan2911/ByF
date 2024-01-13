import React, { useState } from 'react'
import Card from './Card'
import { values } from './storage/Storage'
import { CardClick } from '../Onclick.jsx';


const CardContaner = () => {




  return (
    <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  place-items-center  gap-5'  >
        <Card   id={values[0].id} name={values[0].name} desc={values[0].desc} price={values[0].price} delTime={values[0].delTime} url={values[0].url}  />
        <Card   id={values[1].id} name={values[1].name} desc={values[1].desc} price={values[1].price} delTime={values[1].delTime} url={values[1].url}/>
        <Card id={values[2].id} name={values[2].name} desc={values[2].desc} price={values[2].price} delTime={values[2].delTime} url={values[2].url}/>
        <Card  id={values[3].id} name={values[3].name} desc={values[3].desc} price={values[3].price} delTime={values[3].delTime} url={values[3].url}/>
        <Card id={values[4].id} name={values[4].name} desc={values[4].desc} price={values[4].price} delTime={values[4].delTime} url={values[4].url}/>
        <Card id={values[5].id} name={values[5].name} desc={values[5].desc} price={values[5].price} delTime={values[5].delTime} url={values[5].url}/>
    </div>
  )
  
}

export default CardContaner