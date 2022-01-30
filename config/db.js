const Sequelize = require('sequelize');

const db = new Sequelize('uptasknode','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    port:'3308',
    operatorsAlias:false,
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }
})

module.exports = db;