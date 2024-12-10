import React,{ useState, useEffect, useContext } from 'react'
import TweetInput from './TweetInput'
import TweetList from './TweetList'
import Tweet from './Tweet'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  return (
    <>
      <div className='app'>
          
        <Sidebar/>    
        <TweetInput/>
        <TweetList/>
        <Tweet/>
        
       </div>  
        
    </>  
    
  )
}

export default App
