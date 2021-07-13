import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import socketClient  from "socket.io-client";

const SERVER = "http://127.0.0.1:8080";
function App() {
    var socket = socketClient(SERVER);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
    });
    socket.emit('aaa','aaaaa')

    const [chat,setChat]=useState('');
    useEffect(()=>{
        setChat([{
            key:1,
            user:"aziz",
            msg:"Hello",
            timeStamp:"15:00 am"
        }]);
    },[]);

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
