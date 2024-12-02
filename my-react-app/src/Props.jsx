import React from 'react'

function Props(props) {
  return (
    <div className = "student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>isStudent: {props.isStudent}</p>
      
    </div>
  )
}
Props.defaultProps = {
    name: "Visitor",
    age: 0,
    isStudent: false,
}

export default Props
