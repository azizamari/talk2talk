const formatMessage=require('./utils/messages');
const app = require('express')();
const server = require('http').createServer(app);
const cors=require('cors');
const io = require('socket.io')(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`listening on:${PORT}`);
});

io.on('connection', socket =>{
    socket.broadcast.emit('message', formatMessage('talk2talk admin', 'A new user has joined the chat'));

    socket.on('chatMessage',(msg,user)=>{
        io.emit('chatMessage',formatMessage(user,msg));
    });
});