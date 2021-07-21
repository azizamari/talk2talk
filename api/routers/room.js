const router=require('express').Router();
const roomController=require('../controllers/room');
router.post('/',roomController.postNewRoom)

module.exports=router;