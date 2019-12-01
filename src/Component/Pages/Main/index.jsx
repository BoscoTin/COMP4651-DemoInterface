import React from 'react'

import Chatroom from '../../Prefabs/chatroom.jsx'

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import "../../styles.css"


const messages = []


class MainPage extends React.Component{
  render(){
    return(
      <div className="mainpage">
        <Row>
          <Col>
            The chatroom is at the right.
          </Col>

          <Col>
            <Chatroom messages={messages} />
          </Col>
        </Row>
      </div>
    )
  }
}

export { MainPage }
