import React, { Component } from 'react';

class DateAndTime extends Component{
  constructor(){
    super()
    this.state = {
      time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
      date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
    }
  }

  componentDidMount(){
    //Time updates every second
    this.intervalID = setInterval( () => this.getTime(), 1000)
    //Date updates every minute
    this.intervalID = setInterval( () => this.getDate(), 60000)
  }

  getDate = () => {
    this.setState({ date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })})
  }

  getTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
    })
  }

  render(){
    return(
      <div id="dateAndTime">
        <h1 className="date">{this.state.date}</h1>
        <h2 className="time">{this.state.time}</h2>
      </div>
    )
  }
}

export default DateAndTime;
