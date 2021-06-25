const http =require('http');
const path =require('path');
const express =require('express');
const socketio=require('socket.io');

const app = express();
const server = http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));
io.on('connection',socket=>{ 
    socket.emit('message', 'Welcome to talk2talk');
    socket.broadcast.emit('message', 'A new user has joined the chat');

    socket.on('disconnect',()=>{
        io.emit('message', 'A user has left the chat.')
    });
    socket.on('chatMessage',(msg)=>{
        console.log(`We got a message: ${msg}`);
    });
});

const PORT=process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});