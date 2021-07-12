const http =require('http');
const path =require('path');
const express =require('express');
const session=require('express-session');
const socketio=require('socket.io');
const formatMessage=require('./utils/messages');
const authRouter=require('./router/auth');

var SequelizeStore = require("connect-session-sequelize")(session.Store);
const Sequelize=require('sequelize');
const sequelize=require('./utils/database');
const message=require('./models/message');


const app = express();
const server = http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
const myStore=new SequelizeStore({
    db:sequelize,
});
app.use(session({
    secret:'FASf56dsfdsa4d84fsD',
    resave:false, 
    saveUninitialized:false,
    store:myStore,
}));

app.get('/',(req, res)=>{
    console.log(req.get('cookie'));
    if(req.session.isLoggedIn===true){
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

sequelize.sync().then(x=>{
    // console.log(x);
}).catch(error=>{console.log(error)});

const PORT=process.env.PORT || 4000;
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});