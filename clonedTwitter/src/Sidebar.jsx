import React from 'react'
import SidebarOption from './SidebarOption'
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';

import Button from '@mui/material/Button';


function Sidebar() {
  return (
    <div className ='sidebar'>
        {/*X Icon*/}
        
        <XIcon className="sidebar-twitterIcon"/>
        

        {/*SidebarOption*/}
        <SidebarOption Icon = {HomeIcon} text ="Home"/>
        <SidebarOption Icon = {SearchIcon} text ="Explore"/>
        <SidebarOption Icon = {NotificationsNoneIcon} text ="Notifications"/>
        <SidebarOption Icon = {MailOutlineIcon} text ="Messages"/>
        <SidebarOption Icon = {OpenInNewIcon} text ="Grok"/>
        <SidebarOption Icon = {PeopleOutlinedIcon} text ="Communities"/>
        <SidebarOption Icon = {XIcon} text ="Premium"/>
        <SidebarOption Icon = {FlashOnOutlinedIcon} text ="Verified Orgs"/>
        <SidebarOption Icon = {PersonOutlineOutlinedIcon} text ="Profile"/>
        <SidebarOption Icon = {PendingOutlinedIcon} text ="More"/>
        

        <Button variant = "outlined" class = "post-button">Post</Button>



      
    </div>
  )
}

export default Sidebar

