const Sequelize = require('sequelize');
const sequelize=require('../utils/database');

const message=sequelize.define('message',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    text:{
        type:DataTypes.TEXT
    },
    senderId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    receiverId:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
})