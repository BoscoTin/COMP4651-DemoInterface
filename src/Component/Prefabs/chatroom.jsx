import React from 'react'
import "../styles.css"

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatActions } from '../../actions'

import { InputRow } from "./input.jsx"



const Chatroom = ({messages}) => (
  <div className="chatroom">
    <div className="messages_box">
      { /* messages.map( message => <div>{message}</div>) */}
    </div>
    <InputRow />
  </div>
)


function mapStateToProps(state) {
  return {
    messages: [
      "abc",
      "edf"
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
