import React from 'react'
import { Link } from 'react-router-dom'

class MainPage extends React.Component{
  render(){
    return(
      <Link to="/404">
        <h1>Hello World</h1>
      </Link>  
    )
  }
}

export { MainPage }
