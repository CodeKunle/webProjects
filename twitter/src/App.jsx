
// App component: App.jsx
import React, { useState, useEffect, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import Widget from './Widget';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'User', profilePicture: 'user.jpg' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
          <div className='sidebar'>           
               <Sidebar />          
          </div>
                    
          <div className='feed'>
               <Header />                
               <Profile />
               <TweetInput addTweet={addTweet} />
               <TweetList tweets={tweets} />                   
          </div>
          <div class='widget'>                 
              <Widget/>
          </div>
      </div>    
    </AppContext.Provider>
  );
};

export default App;