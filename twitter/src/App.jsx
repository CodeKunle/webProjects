import { useState } from 'react'
import TweetInput from './TweetInput'
import TweetList from './TweetList'
import Tweet from './Tweet'
import Sidebar from './Sidebar'
import './App.css'
import Feed from './Feed'
import Header from './Header'

function App() {
  
  return (
    <>
      <div className='app'>
        <Header/>

          
        <Sidebar/>
        <main>
          <TweetInput/>
          <TweetList/>
          <Tweet/>
        </main>
         
        <Feed/>
        
      </div>
      
    </>
  )
}

export default App
