const {Sequelize}=require('sequelize');
const sequelize = new Sequelize('talk2talk','postgres','testpassword',{
    host:'localhost',
    dialect:'postgres',
    port: 6969,
    logging: false
});
module.exports=sequelize;