import React, {forwardRef} from 'react'
import Avatar from '@mui/material/Avatar'; 
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

const Tweet = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref)=>{
      return (
        <div className="tweet" ref={ref}>
          <div className="tweet-avatar">
            <Avatar src={avatar} />
          </div>
          <div className="tweet-body">
            <div className="tweet-header">
              <div className="tweet-headerText">
                <h3>
                  {displayName}{" "}
                  <span className="tweet-span">
                    {verified && <VerifiedIcon className="post-badge" />} @ {username}
                  </span>
                   
                </h3>
              </div>
              <div className="tweet-headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src="https://external.xx.fbcdn.net/emg1/v/t13/3829306701532368708?stp=dst-src&url=https%3A%2F%2Fmedia3.giphy.com%2Fmedia%2FFoH28ucxZFJZu%2Fgiphy.gif%3Fcid%3D6c09b952wd79l8e1a83xu30nxto6a4ybln9bgjxqvenifpz8%26ep%3Dv1_internal_gif_by_id%26rid%3Dgiphy.gif%26ct%3Dg&utld=giphy.com&ccb=13-1&oh=06_Q399AuOtDOb0tr-1VKopREbSAHoxVxifl_uLMAjcLdmCnYg&oe=675B711F&_nc_sid=1d65fc" alt="" />

            <div className="tweet-footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatOutlinedIcon fontSize="small" />
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <TurnedInNotOutlinedIcon fontSize="small" />
            < SignalCellularAltOutlinedIcon fontSize="small"/>
            </div>
          </div>
        </div>
      );
    }
    );
  

export default Tweet;
