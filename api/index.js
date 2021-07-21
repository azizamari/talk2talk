const formatMessage=require('./utils/messages');
const express = require('express');
const app=express()
const server = require('http').createServer(app);
const sequelize = require('./utils/database');
const room = require('./models/room');
const message = require('./models/message');

const roomRouter=require('./routers/room');
const messageRouter=require('./routers/message');

const cors=require('cors');
const io = require('socket.io')(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());


app.use('/rooms',roomRouter);
app.use('/messages',messageRouter);


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`listening on:${PORT}`);
});
sequelize.sync({force:true})
  .then(() => {
    console.log(`Database & tables created!`)
  })

io.on('connection', socket =>{
    socket.on('chatMessage',(msg,user)=>{
        io.emit('chatMessage',formatMessage(user,msg));
    });
});