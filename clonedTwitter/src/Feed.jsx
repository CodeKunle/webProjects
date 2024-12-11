import React from 'react'
import Header from './Header'
import TweetInput from './TweetInput'
import Tweet from './Tweet'
/*import TweetList from './TweetList'*/



function Feed() {
  return (
    <div className='feed'>
      
        <Header className='feed-header'/>
      <div >
        <TweetInput/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>  
        
        
       
        
    </div>
  )
}

export default Feed
