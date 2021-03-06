import React, { useState } from 'react'
import "../styles.css"


import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'

import SendIcon from '@material-ui/icons/Send';


const InputRow = ({send}) => {

  const [msg, setMsg] = useState("");

  return (
    <div className="chatroom_input">
      <InputGroup>
        <FormControl
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
          onKeyPress={({key}) => {
            if(key == 'Enter'){
              send(msg)
              setMsg("")
            }
          }}
          placeholder="Enter your message here"
          />
        <InputGroup.Append>
          <Button onClick={() => {
              send(msg)
              setMsg("")
            }}>
            <SendIcon />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export { InputRow }
