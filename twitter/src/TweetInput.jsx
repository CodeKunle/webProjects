// TweetInput component


import React, { useState, useContext } from 'react';
import { AppContext } from './App';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState(''); // State for text input
  const [tweetImage, setTweetImage] = useState(''); // State for image input
  const { user } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new tweet object with content and image
    const newTweet = {
      content: tweet,
      image: tweetImage || null, // Include image only if provided
      author: user.name,
      date: new Date(),
    };

    addTweet(newTweet);      // Add the new tweet
    setTweet('');            // Clear text input
    setTweetImage('');       // Clear image input
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text Input for Tweet */}
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
        /*style={{ marginBottom: '10px', display: 'block', width: '100%' }}*/
        className='tweetInput'
      />

      {/* Input for Image URL */}
      <input
        type="text"
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        placeholder="Optional: Enter image URL"
        /*style={{ marginBottom: '10px', display: 'block', width: '60%' }}*/
        className='tweetInput'
      />

      {/* Submit Button */}
      <button type="submit" className="tweetButton">
        Tweet
      </button>
    </form>
  );
};

export default TweetInput;