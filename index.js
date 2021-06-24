const express =require('express');
const http =require('http');

const server = http.createServer();
const app = express(server);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on port ${process.env.PORT || 3000}`);
});