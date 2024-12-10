/*import React, { useState } from 'react';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet.trim()){
    addTweet(tweet);
    setTweet('');}
  };

  return (
    <div className='tweetBox'>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What's happening?"
            className='tweetInput'
        />
        <button type="submit" className='inputButton'>Tweet</button>
        </form>
    </div>
  )
}



export default TweetInput;*/

import * as React from 'react';
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button';

function TweetInput(){
    return(
        <div>
            <form>
                <div>
                    
                    <Avatar src=" https://mui.com/material-ui/react-avatar/#system-ImageAvatars.js" className='custom-avatar' />
                    <input 
                    type = "text"
                    placeholder="what's happening?"/>
                </div>
                <Button variant="text">Tweet</Button>
            </form>
        </div>
    );
}


export default TweetInput;