import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { io } from "socket.io-client";

const SERVER = "http://127.0.0.1:8080";
function App() {
    
    const [chat,setChat]=useState('');
    useEffect(()=>{
        setChat([{
            user:"aziz",
            msg:"Hello",
            timeStamp:"15:00 am"
        }]);
    },[]);

    var socket = io.connect(SERVER);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
        socket.emit('chatMessage',"heeeey","aziz");
        socket.emit('chatMessage',"shut up","god");
    });
    socket.on('chatMessage', (msg) => {
        setChat([...chat,{
            user:msg.username,
            msg:msg.text,
            timeStamp:msg.time,
        }]);
    });
    console.log(chat);
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
