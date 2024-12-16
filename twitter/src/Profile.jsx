import React, { useContext } from 'react';
import { AppContext } from './App';
import Button from '@mui/material/Button';

const Profile = ({ onBackToFeed }) => {
  const { user } = useContext(AppContext);

  return (
    <div className="profile">
      <Button onClick={onBackToFeed} style={{ marginBottom: '10px' }}>
        Back to Feed
      </Button>
      <img 
        src={user.profilePicture} 
        alt={user.name} 
        style={{ width: '200px', height: '200px', borderRadius: '50%' }} 
      />
      <h2>{user.name}</h2>
      <p><strong>Bio:</strong>  💡Web Developer at Heart |  🌍Finance & Sustainability Enthusiast |  Exploring the intersection of innovation and impact</p>
      <p><strong>Joined:</strong>January 2023</p>
      <p><strong>Tweets:</strong> 123</p>
      <p><strong>Followers:</strong> 20,530</p>
      <p><strong>Following:</strong> 123</p>
    </div>
  );
};

export default Profile;

