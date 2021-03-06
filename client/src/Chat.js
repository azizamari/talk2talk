import React, {useEffect, useState} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import {socket} from './App';
import './Chat.css';

function Chat(props) {
    const [message, setMessage] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        setMessage('');
        socket.emit('chatMessage',message,'random user')
    }

    const [seed,setSeed]=useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*1000));
    },[]);


    var chatBubbles=[]
    for(let message of props.chat){
        chatBubbles.push(
            <div className={`chat__message ${true && 'chat__receiver'}`}>
                <span className="chat__name">{message.user}</span>
                {message.msg}
                <span className="chat__timestamp">{message.timeStamp}</span>
            </div>
        );
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/identicon/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Movies</h3>
                    <p>Last seen at 14:54</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon className="icon__green"/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon className="icon__green"/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className="icon__green"/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {chatBubbles}
            </div>
            <div className="chat__footer">
                <form onSubmit={handleSubmit}>
                    <input onChange={event => setMessage(event.target.value)}  placeholder="Type a message" type="text" />
                    <button>
                        <IconButton>
                            <SendIcon className="icon__green"/>
                        </IconButton> 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chat
