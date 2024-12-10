import React from 'react'
import Tweet from './Tweet';
import TweetInput from './TweetInput';


function TweetList(props){
    return (
      <div>
        {props.tweets.map((prop) => (
        <Tweet key={postMessage.id} title={post.title} content={post.content} />
        ))}
        
      </div>
      
    );
  };
  
export default TweetList;









