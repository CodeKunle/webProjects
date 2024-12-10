// Tweet component: Tweet.jsx
import React from 'react'
import App from './App'

function Tweet(){

const Tweet = ({ content }) => {
  return (
    <li>
      <p>{content}</p>
    </li>
  )
}
}
export default Tweet;