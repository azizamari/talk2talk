const router=require('express').Router();
const path=require('path');

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','login.html'));
});

module.exports = router;