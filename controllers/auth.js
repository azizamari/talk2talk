const path=require('path');

exports.postLogin=(req,res)=>{
    console.log(req.body);
    res.setHeader('Set-Cookie','loggedIn=true');
    res.redirect('/');
}
exports.getLogin=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','login.html'));
}