const router=require('express').Router();
const roomController=require('../controllers/room');
router.post('/',roomController.postNewRoom)
router.get('/',roomController.getRooms)

module.exports=router;