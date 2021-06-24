const http =require('http');
const path =require('path');
const express =require('express');

const server = http.createServer();
const app = express(server);

app.use(express.static(path.join(__dirname,'public')));

const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});