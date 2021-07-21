const router=require('express').Router();
const messageController=require('../controllers/message');

router.post('/',messageController.postNewMessage);

module.exports = router;