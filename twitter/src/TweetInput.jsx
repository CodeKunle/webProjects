import React, {useState} from 'react'

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
        <button type="submit" class="post-button">Tweet</button>
      </form>
      
    )
}


/*function TweetInput(){
  return(
    <div>
      <p>Trial of tweet</p>
    </div>
  )*/



export default TweetInput
