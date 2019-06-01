import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import DateAndTime from './components/DateAndTime'
import Background from './components/Background'
import Weather from './components/Weather'
import UploadForm from './components/UploadForm'

class App extends Component{

  constructor(){
    super()
    this.state = {
      images: [],
      imageUrl: "url(../../images/first.jpg)"
     }
  }

  componentDidMount(){
    this.getImages()
    //Background image updates every 10 minutes
    this.intervalID = setInterval( () => this.randomImage(), 2000)
  }

  getImages = async () => {
    var res = await fetch('/api/getImage')
    var data = await res.json()
    this.setState({ images: data.images })
  }

  randomImage = () =>{
    var i = Math.floor(Math.random() * this.state.images.length)
    this.setState({ imageUrl:"url(../../images/" + this.state.images[i] + ")" })
  }

  render(){
    return(
    <div className="container">
      <BrowserRouter>
        <DateAndTime />
        <Background image={this.state.imageUrl} />
        <Weather />
        <Route path="/api/new" component={UploadForm} />
      </BrowserRouter>
    </div>
    )
  }
}


export default App
