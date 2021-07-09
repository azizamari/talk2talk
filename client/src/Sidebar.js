import React from 'react';
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar;