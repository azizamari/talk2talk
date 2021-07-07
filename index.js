const http =require('http');
const path =require('path');
const express =require('express');
const socketio=require('socket.io');
const formatMessage=require('./utils/messages');
const authRouter=require('./router/auth');

const app = express();
const server = http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.get('/',(req, res)=>{
    console.log(req.get('cookie'));
    if(req.query.user !==undefined){
        res.sendFile(path.join(__dirname,'public','talk.html'));
    }
    else{
        res.redirect('/login');
    }
});
app.use('/',authRouter)

io.on('connection',socket=>{ 
    socket.emit('message', formatMessage('talk2talk admin', 'Welcome to talk2talk'));
    socket.broadcast.emit('message', formatMessage('talk2talk admin', 'A new user has joined the chat'));

    socket.on('disconnect',()=>{
        io.emit('message', formatMessage('talk2talk admin', 'A user has left the chat.'));
    });
    socket.on('chatMessage',(msg,user)=>{
        io.emit('message',formatMessage(user,msg));
    });
}); 

const PORT=process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});