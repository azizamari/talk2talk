import React, {useEffect,useState} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat() {
    const [seed,setSeed]=useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*1000));
    },[]);

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/gridy/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
