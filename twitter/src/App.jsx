import React from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';
import Profile from './Profile';
import MySvg from './assets/logo.svg';
import './App.css';

function App() {
  
  return (
    <>
      <div className='app'>
          
        <Sidebar/>
        <Profile/>
        <TweetInput/>
        <TweetList/>
        
        <Header/> 
        <Feed/>
        
      </div>
      
    </>
  )
}

export default App
