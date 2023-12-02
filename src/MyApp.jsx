import React, { Component } from 'react'
import './myApp.css'
import axios from 'axios'

class MyApp extends Component {
  
    state = {advice: ''}
  
  componentDidMount = () => {
    this.adviceFech();
  }
  
   adviceFech = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response)=>{
      
        const {advice} = response.data.slip;
        this.setState({advice})
        console.log(advice);
    })
    .catch((error)=>{
        console.log(error);
    })
}     
  render(){
    const {advice} = this.state
    return (
      
      <div className='myApp'>
        <div className="quote">
        <h1>{advice}</h1>
        </div><br />
        <button className='btn' onClick={()=>{this.adviceFech()}}>Generate New Advice</button>
      </div>
    )
  }
}

export default MyApp