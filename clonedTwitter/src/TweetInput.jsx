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
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


function TweetInput(){
    return(
        <div className='tweetBox'>
            <form>
                <div className='tweetInput'>
                    <Stack direction="row" spacing={2}>                      
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>                        
                    </Stack>
                    <input 
                    type = "text"
                    placeholder="what's happening?"/>
                </div>
                <Button variant="text" class='inputButton'>Tweet</Button>
            </form>
        </div>
    );
}


export default TweetInput;