var app = require('express')();
var http = require('http').createServer(app);





const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});