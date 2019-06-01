import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Weather extends Component{
  constructor(){
    super();
    this.state = {
      temperature: null,
      condition: ""
    }
  }

  componentDidMount(){
    this.getWeather()
    //Weather updates every 10 minutes
    this.intervalID = setInterval( () => this.getWeather(), 600000)
  }

  getWeather = async () =>{
    var addr = "https://api.openweathermap.org/data/2.5/weather?q=calgary,ca&appid=ca9a701117215b0de595c6ed93372d57"

    var res = await axios(addr);

    this.setState({
      temperature: Math.round(res.data.main.temp - 273.15),
      condition: res.data.weather[0].icon
    })
  }

  render(){
    return <h1 id="weather"><Link to="/new">{getIcon(this.state.condition)}</Link>{this.state.temperature}°C</h1>
  }
}

function getIcon(condition){
  switch(condition){
    case "11d":
      return <i className='uil uil-bolt'></i>
      break;
    case "09d":
      return <i className='uil uil-tear'></i>
      break;
    case "10d":
      return <i className='uil uil-raindrops'></i>
      break;
    case "13d":
      return <i className='uil uil-snowflake'></i>
      break;
    case "50d":
      return <i className='uil uil-water'></i>
      break;
    case "01d":
      return <i className='uil uil-brightness'></i>
      break;
    case "01n":
      return <i className='uil uil-moon'></i>
      break;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <i className='uil uil-cloud'></i>
      break;
    default:
      return <i className='uil uil-temperature-half'></i>
      break;
  }
}

export default Weather;
