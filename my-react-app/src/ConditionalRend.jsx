import React from 'react'

function ConditionalRend(props) {
  return 
    (props.logIn? <h3>Welcome {props.userName}
    </h3>: 
    <h3>Continue</h3>)  ;
  
}

export default ConditionalRend
