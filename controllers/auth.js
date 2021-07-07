const path=require('path');

exports.postLogin=(req,res)=>{
    console.log(req.body);
    req.session.isLoggedIn=true;
    res.redirect('/');
}
exports.getLogin=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','login.html'));
}