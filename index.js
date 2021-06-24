const http =require('http');
const path =require('path');
const express =require('express');
const socketio=require('socket.io');

const app = express();
const server = http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));
io.on('connection',socket=>{
    console.log('New connection');
});

const PORT=process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});