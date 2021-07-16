const formatMessage=require('./utils/messages');
const app = require('express')();
const server = require('http').createServer(app);
const sequelize = require('./utils/database');
const room = require('./models/room');
const message = require('./models/message');
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
sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })

io.on('connection', socket =>{
    socket.on('chatMessage',(msg,user)=>{
        io.emit('chatMessage',formatMessage(user,msg));
    });
});