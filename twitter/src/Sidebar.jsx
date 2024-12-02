import React from 'react'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import XIcon from '@mui/icons-material/X';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




function Sidebar() {
  return (
    <div className = "sidebar">
         {/*twitter icon*/}
         <XIcon/>

        {/*SidebarOption*/}
        <SidebarOption active Icon={HomeOutlinedIcon}  text="Home" />
        <SidebarOption Icon={SearchIcon}  text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon}  text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon}  text="Messages" />
        <SidebarOption Icon={OpenInNewIcon}  text="Grok" />
        <SidebarOption Icon={BookmarkBorderIcon}  text="Bookmarks" />
        <SidebarOption Icon={PeopleOutlinedIcon}  text="Communities" />
        <SidebarOption Icon={XIcon}  text="Premium" />
        <SidebarOption Icon={FlashOnIcon}  text="Verified Orgs" />
        <SidebarOption Icon={PersonOutlineOutlinedIcon}  text="Profile" />
        <SidebarOption Icon={PendingOutlinedIcon } text="More" />

        <Button variant = "outlined" class= "button">Post</Button>



      
    </div>
  )
}

export default Sidebar
