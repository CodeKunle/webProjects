import React, {useState, useEffect} from 'react';
import Header from './Header';
import TweetInput from './TweetInput';
import Tweet from './Tweet';
import db from './firebase';
import TweetList from './TweetList';
import FlipMove from "react-flip-move";
import { ref, onValue } from "firebase/database";

function Feed() {
  const[posts, setPosts] = useState([]);

 /* useEffect(()=>{
    db.posts('post').onSnapshot(snapshot => 
      setPosts(snapshot.docs.map(doc => doc.data()))
    )
  }, []);*/

  useEffect(() => {
    // Initialize Firebase Realtime Database
    
    const postRef = ref(db, "posts"); // Specify the path in the database

    // Listen for data changes
    const unsubscribe = onValue(postRef, (snapshot) => {
      const data = snapshot.val(); // Get the data from the database
      setPosts(data); // Update state with the data
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
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
            
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
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
  )
}

export default Feed
