

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
        /*image: tweetImage,*/
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
                    placeholder="Optional: enter image url" 
                    type = "text"               
                />
               <Button 
                    onClick={sendTweet}
                    type="submit" 
                    class ='inputButton'>Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetInput;


            