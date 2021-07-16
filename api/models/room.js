const {Sequelize, DataTypes} = require('sequelize');
const sequelize=require('../utils/database');

const room=sequelize.define('room',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports=room;