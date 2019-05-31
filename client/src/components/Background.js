import React, { Component } from 'react';

class Background extends Component{
  render(){
    return(
      <div className="background">
        <div style={{backgroundImage: this.props.image}} id="backgroundImage"></div>
      </div>
    )
  }
}

export default Background;
