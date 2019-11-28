import React from 'react'
import { Link } from 'react-router-dom'

// components
import {
  Navbar,
  Nav
} from 'react-bootstrap'

// graphics
import { Chat } from '@material-ui/icons'

// css
import "../styles.css"



class Layout extends React.Component{

  render(){
    const Component = this.props.component

    return(
      <div className="main_root">
        <nav>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <Chat />
              Chatbot
            </Navbar.Brand>

            <div className="expand_width"/>

            <Nav>
              <Nav.Link href="/">Chatbot</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>

          </Navbar>
        </nav>

        <main className="main_content">
          <Component />
        </main>
      </div>
    )
  }
}

export { Layout }
