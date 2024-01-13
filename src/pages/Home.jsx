import React from 'react'
import Card from '../components/Card'
import CardContaner from '../components/CardContaner'
import { useSelector } from 'react-redux'


function Home() {


  return (
    
    <>
    
    <div className='h-screen w-full  justify-items-center place-items-center grid lg:grid-cols-2  '>
        <div className='h-full w-full text-center grid justify-items-center place-items-center  text-2xl'>
            <h1 className=''>order your flowers</h1>
            <h1>in a nominal cost</h1>
            <h1>and free delivery</h1>
        </div>
        <div className='h-full w-full  grid justify-items-center place-items-center'>
            <img src="https://img.freepik.com/free-psd/hello-spring-floral-vertical-poster-template_47987-14836.jpg?w=360&t=st=1702364744~exp=1702365344~hmac=dfd8f1705306771331c1c696e7f6a468a04a1516ff9e0ca4508e1919e1997923" alt=""  className='w-auto h-4/5 rounded-3xl ' />
        </div>
    </div>
  <CardContaner/>
 
    </>
   
   
    
  )
}

export default Home