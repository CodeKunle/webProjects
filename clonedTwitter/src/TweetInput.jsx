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

import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import db from './firebase';



function TweetInput(){
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e =>{
    e.preventDefault();

    db.posts('posts').add({
        displayName:'Ben Casey',
        username:'Benc',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:'https://mui.com/material-ui/react-avatar/#system-ImageAvatars.js'
        
    });
    
    setTweetMessage("");
    setTweetImage("");

    }
    return(
        <div className='tweetBox'>
            <form>
                <div className='tweetInput'>                                        
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>                        
                <input 
                    onChange={e =>setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="what's happening?"
                    type = "text"
                />                       
                </div>

                <input
                    value={tweetImage}
                    onChange={e =>setTweetImage(e.target.value)}
                    className='tweetBox-imageInput'
                    placeholder="what's happening?" 
                    type = "text"               
                />

                <Button 
                    onClick={sendTweet}
                    type="submit" 
                    className='inputButton'>Tweet
                </Button>
            </form>
        </div>
    );
}


export default TweetInput;