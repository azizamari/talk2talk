import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { io } from "socket.io-client";

const SERVER = "http://localhost:8080";
const socket = io.connect(SERVER);
function App() {
    
    const [chat,setChat]=useState([]);

    socket.on('chatMessage', (msg) => {
        setChat([...chat,{user:msg.username, msg:msg.text, timeStamp:msg.time}]);
    });
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
export {socket};
export default App;
