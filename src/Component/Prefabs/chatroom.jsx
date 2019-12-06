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

  handleSendMessage = (message) => {
    const { dispatch } = this.props
    dispatch( ChatActions.beginSendMessage() )
    dispatch( ChatActions.sendMessage({
      dialogs: 'cornell',
      level: 'word-glove',
      sentence: message,
    }) )
  }

  render(){
    const messages = this.props.messages

    return (
      <div className="chatroom">
          <ul className="messages_box">
            {messages.map( message => (
              <Message
                message={message}
                />
            ))}
            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </ul>
          <InputRow send={this.handleSendMessage.bind(this)} />
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    messages: state.chat.messages
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
