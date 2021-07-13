const path=require('path');

exports.postLogin=(req,res)=>{
    console.log(req.body.email);
    req.session.isLoggedIn=true;
    res.redirect(`/?user=${req.body.email}`);
}
exports.getLogin=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','login.html'));
}
exports.postLogout=(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}