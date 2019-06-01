import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UploadForm extends Component{
  render(){
    return(
      <div className="uploadForm">
        <Link to='/'><i className='uil uil-multiply'></i></Link>
        <p>
          <form enctype="multipart/form-data" className="center" action="/" method="post">
            <input className="" type="file" name="uploadedImage" accept="image/jpeg" required></input>
              <div>
                <button type="submit" className="uploadButton">Upload</button>
              </div>
            </form>
          </p>
        </div>
      )
    }
  }

  export default UploadForm
