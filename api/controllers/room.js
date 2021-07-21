const sequelize = require('../utils/database');
const Room = require('../models/room');

exports.postNewRoom=(req,res)=>{
    if(!req.body.name){
        res.status(400).send({
            message: "Room Name can not be empty!"
          });
          return;
    }
    Room.create({Name:req.body.name})
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

exports.getRooms=(req,res)=>{
    Room.findAll().then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}