const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors=require('cors');

app.use(cors());

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`listening on:${PORT}`);
});

io.on('connection', socket =>{
    console.log('New client connected');
    socket.emit('connection','HALLO')
    socket.on('aaa',msg=>{
        console.log(msg)
    })
});