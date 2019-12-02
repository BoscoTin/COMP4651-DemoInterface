import React from 'react'

const members = [
  '20420581 CHIU YUI FAN Charlie (Github Handle: CharlieCCC)',
  '20421717 TANG WAI TIN (Github Handle: BoscoTin)',
  '20388102 BHANUSHALI, TANMAY (Github Handle : tanster1234)'
]


class About extends React.Component{
  render(){
    return(
      <div>
        Team members:
        {members.map(member => <div>{member}</div>)}
      </div>
    )
  }
}

export { About }
