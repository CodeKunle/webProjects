// TweetInteractions component: TweetInteractions.jsx
import React from 'react';

const TweetInteractions = ({ likes, onLike }) => {
  return (
    <div>
      <button onClick={onLike} className='interaction-button'>❤️ {likes}</button>
      <button className='interaction-button'>⇅</button>
      <button className='interaction-button'>💬</button>
    </div>
  );
};

export default TweetInteractions;
