import React from 'react';
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

import './Sidebar.css';

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon className="icon__green" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon className="icon__green"/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="icon__green"/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon className="icon__white"/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat={true}/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;