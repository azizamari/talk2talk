const {Sequelize, DataTypes} = require('sequelize');
const sequelize=require('../utils/database');

const room=sequelize.define('room',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    }
});

module.exports=room;