import React, {useEffect,useState} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat({addNewChat}) {
    const [seed,setSeed]=useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*1000));
    },[]);

    const createChat=()=>{
        const roomName=prompt("Enter chat name");
        if(roomName){
            // Add room using backend api
        }
    };

    return  !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat
