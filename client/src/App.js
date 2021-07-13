import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import socketClient  from "socket.io-client";

const SERVER = "http://localhost:8080/";
function App() {

    const [chat,setChat]=useState('');
    useEffect(()=>{
        setChat([{
            key:1,
            user:"aziz",
            msg:"Hello",
            timeStamp:"15:00 am"
        }]);
    },[]);

    var socket = socketClient(SERVER);
    socket.on('connection',()=>{
        console.log("I'm in")
    })
    socket.on('message', (message)=>{
        console.log(message);
        // outputMessage(message);
    
        // chat.scrollTop=chat.scrollHeight;
        
    });
    socket.emit('chatMessage',"Ayoo","WEEb")
    return (
        <div className="app">
            <div className="app__body">
                {/* SideBar */}
                <Sidebar />
                {/* Chat */}
                <Chat chat={chat}/>
            </div>
        </div>
    );
}

export default App;
