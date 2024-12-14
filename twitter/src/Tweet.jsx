


import React, { useState } from 'react';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <li>
      {/* Display Tweet Content */}
      <p>{tweet.content}</p>

      {/* Display Tweet Image (if available) */}
      {tweet.image && (
        <img
          src={tweet.image}
          alt="Tweet visual"
          style={{
            maxWidth: '100%',
            borderRadius: '10px',
            marginTop: '10px',
          }}
        />
      )}

      {/* Tweet Details */}
      <small>By {tweet.author} on {new Date(tweet.date).toLocaleString()}</small>

      {/* Tweet Interactions */}
      <TweetInteractions likes={likes} onLike={handleLike} />
    </li>
  );
};

export default Tweet;
