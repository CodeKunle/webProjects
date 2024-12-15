
// App component: App.jsx
/*import React, { useState, useEffect, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import Widget from './Widget';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: '@waheed', profilePicture: 'https://mui.com/material-ui/react-avatar/#system-ImageAvatars.js' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  // Function to toggle the profile view
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
          <div className='sidebar'>           
               <Sidebar onProfileClick={handleProfileClick}/>          
          </div>
                    
          <span className='feed'>
               <Header  className="header"/>                
               <Profile />
               <TweetInput addTweet={addTweet} />
               <TweetList tweets={tweets} />                   
          </span>
          <div class='widget'>                 
              <Widget/>
          </div>
      </div>    
    </AppContext.Provider>
  );
};

export default App;*/


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
  const [user, setUser] = useState({ 
    name: '@waheed', 
    profilePicture: 'https://mui.com/material-ui/react-avatar/#system-ImageAvatars.js' 
  });
  const [theme, setTheme] = useState('light');
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to toggle profile view

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true); // Open the profile page
  };

  const handleBackToFeed = () => {
    setIsProfileOpen(false); // Go back to the feed
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <div className="sidebar">
          <Sidebar onProfileClick={handleProfileClick} />
        </div>

        <span className="feed">
          <Header className="header" />
          {/* Conditionally render Profile or Feed */}
          {isProfileOpen ? (
            <Profile onBackToFeed={handleBackToFeed} />
          ) : (
            <>
              <TweetInput addTweet={addTweet} />
              <TweetList tweets={tweets} />
            </>
          )}
        </span>

        <div className="widget">
          <Widget />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
