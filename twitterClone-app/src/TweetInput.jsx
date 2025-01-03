import React, { useState, useEffect } from 'react';
import App from './App';

function TweetInput({ addTweet }) {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(tweet);
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  )
}

export default TweetInput;