import React, { useEffect, useState } from 'react'
import './myApp.css'
import axios from 'axios'
export default function MyApp() {
const [advice, setAdvice] = useState("");
const adviceFech = ()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>{
        console.log(response.data.slip.advice);
        const {advice} = response.data.slip;
        setAdvice({advice: advice});
    })
    .catch((error)=>{
        console.log(error);
    })
} 

 useEffect( ()=>{
    adviceFech()
}, []);
    
    
  return (
    <div className='myApp'>
      <div className="quote">
        <h1>-{advice}</h1>
      </div>
      <button className='btn'>Generate New Quote</button>
    </div>
  )
}
