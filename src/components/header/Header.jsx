
import React,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

const [latitude, setLatitude] = useState(null)
const [longitude, setLongitude] = useState(null)
const [CityName, setCityName] = useState(null)
 
  if  (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
 async function success(position) {
    // const number=98.3832
     setLatitude( await position.coords.latitude);
     setLongitude ( await position.coords.longitude); 
    //  setLongitude ( number); 
    
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  const ApiKey="pk.65d061d9f1b7846e2e9854eebeb8b0b1"
    const url="https://us1.locationiq.com/v1/reverse?key=" +ApiKey+"&lat="+latitude+"&lon="+longitude+"&format=json"


      async function getCity(){
        if(CityName){
          console.log("city name fetched" ,CityName);
        }
        else{
          try {
            const res= await fetch(url)
            const js= await res.json()
            setCityName(js.address.city)
          } catch (error) {
            console.log(error);
          }
      
        }
      }
      
      
  useEffect(() => {
   getCity()
  }, [getCity])
 
  

  




  return (
    <div className='bg-white grid grid-cols-10 gap-3'>
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg&ga=GA1.1.660238721.1702364719&semt=ais" alt="" className='w-auto h-10 '  />
    <p className="text-black underline">{CityName}</p>
    <p className='text-black  col-span-2 italic p-0'>{(CityName==="Kolkata")?`palce is delivarable`:`place is not delivarable`}</p>
    <Link to='/Portal' className='text-black flex p-1 m-auto  col-end-11 bg-text-red-100'>
      <img src="data:image/png;base64,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" width="35px"/></Link>
    </div>
  )
}

export default Header