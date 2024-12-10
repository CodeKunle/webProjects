import React, { useState } from 'react';

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



export default TweetInput;

