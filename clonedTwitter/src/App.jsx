import React, { useState, useEffect, createContext } from 'react';
import Sidebar from './Sidebar'
import Feed from './Feed'
import './App.css'
import Widget from './Widget'







function App(){
  const [tweets, setTweets] = useState([]); // State to store all tweets

  // Function to handle adding a new tweet
  
  const addTweet = (newTweet) => {
    setTweets([...tweets, newTweet]); // Add the new tweet to the list
  };

  return (
    <>
      <div className='app'>
        
        


        {/*Sidebar */}
        <Sidebar/>
        {/*Feed*/}
        <Feed/>
          {/*Header */}
          {/*Profile*/}
          {/*TweetInput*/}
          {/*TweetList*/}
          {/*Tweet*/}

        {/*Widget*/}       
        <Widget/>

        
     </div>
      
    </>
  )
}

export default App

