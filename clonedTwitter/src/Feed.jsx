import React, {useState, useEffect} from 'react';
import Header from './Header';
import TweetInput from './TweetInput';
import Tweet from './Tweet';
import db from './firebase';
import TweetList from './TweetList';
import FlipMove from "react-flip-move";
import { ref, onValue } from "firebase/database";
import {collection, getDocs} from 'firebase/firestore'




function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const snapshot = await getDocs(postsCollection);
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
   


  return (  
    <div className='feed'>

        <Header className='feed-header'/>
      <div >
        <TweetInput/>
        <TweetList/>
        <FlipMove>
        {posts.map((post) => (
        <Tweet
          key={post.id || post.text} // Use a unique key if available
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
        </FlipMove>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>  

    </div>
  
  );
}

export default Feed;