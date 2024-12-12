import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";


function Widget() {
  return (
    <div className='widget'>
      <div className='widget-input'>
        <SearchIcon className="widget-seachIcon"/>
        <input placeholder='Search Twitter' type='text'/>
      </div>
      <div className="widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1800282963051225268"}  />
        <TwitterTweetEmbed tweetId2={"1848431364145877174"}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="javaScript Daily"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widget
