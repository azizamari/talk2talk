const sequelize = require('../utils/database');
const Message = require('../models/message');

exports.postNewMessage=(req,res)=>{
    Message.create({text:req.body.text,senderId:req.body.senderId,receiverId:req.body.receiverId})
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

exports.getMessages=(req,res)=>{
    Message.findAll().then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};