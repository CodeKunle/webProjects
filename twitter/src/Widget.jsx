import React, {useState} from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';


function Widget() {
    const [users] = useState([
        { id: 1, name: 'Kunle', tweet: 'Coding in React is very interesting', },
        { id: 2, name: 'Chiamaka', tweet: 'This is great!', },
        { id: 3, name: 'Fatima', tweet: 'I love coding',}, 
        { id: 4, name: 'Redi', tweet: 'Coding is interesting guys',},
        {id: 5, name: 'gif', tweet:'https://i0.wp.com/wp-modula.com/wp-content/uploads/2018/12/gifgif.gif'},
        {id: 6, name: 'gif2', tweet:'https://media.giphy.com/media/1k8O96NGH4lS8/giphy.gif'}

      ]);
    
      // State for search term and results
      const [searchTerm, setSearchTerm] = useState('');
      const [searchResults, setSearchResults] = useState([]);
    
      // Handle Search Click
      const handleSearch = () => {
        const results = users.filter((user) =>
          user.name.toLowerCase()===searchTerm.toLowerCase()
        );
        setSearchResults(results);
      };
  return (
    <div className='widget'>
     
      <div>
      <h3>Search Users</h3>

      {/* Search Input and Button */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search tweet by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          className='search-input'
        />
        <button onClick={handleSearch} /*style={{ padding: '10px 20px' }} */><SearchIcon className="search-button"/>
          
        </button>
      </div>

      {/* Display Search Results */}
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((user) => <li key={user.id}>{user.tweet}</li>)
        ) : (
          <li>No user found</li>
        )}
      </ul>
    </div>

      <div className="widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1800282963051225268"}  />
        <TwitterTweetEmbed tweetId={"1848431364145877174"}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="javaScript Daily"
          options={{ height: 400 }}
        />

        
      </div>
    </div>
  );
}

export default Widget;