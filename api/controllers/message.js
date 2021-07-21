const sequelize = require('../utils/database');
const Message = require('../models/room');

exports.postNewMessage=(req,res)=>{
    Room.create({name:req.body.name,senderId:req.body.senderId,receiverId:req.body.receiverId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};