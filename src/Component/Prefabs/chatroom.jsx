import React from 'react'
import "../styles.css"

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatActions } from '../../actions'

import { InputRow } from "./input.jsx"
import { Message } from "./message.jsx"


class Chatroom extends React.Component{

  scrollToEnd = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount(){
    this.scrollToEnd()
  }

  componentDidUpdate(){
    this.scrollToEnd()
  }

  render(){
    const messages = this.props.messages

    return (
      <div className="chatroom">
          <ul className="messages_box">
            {messages.map( message => (
              <Message message={message} />
            ))}
            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </ul>
          <InputRow />
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    messages: [
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      },
      {
        content: "Hi",
        user: true
      },
      {
        content: "Bye",
        user: false
      }
    ]
  };
}

function mapDispatchToProps(dispatch) {
  const map = bindActionCreators({...ChatActions}, dispatch);
  map.dispatch = dispatch;
  return map;
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Chatroom)
