import React from 'react'
import "../styles.css"



const Message = ({message}) => (
  <li className={`chat ${message.user ? "right" : "left"}`}>
    {message.content}
  </li>
)

export { Message }
