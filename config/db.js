const Sequelize = require('sequelize');

const Sequelize = new Sequelize('uptasknode','root','rootroot',{
    host: 'localhost',
    dialect: 'mysql',
    port:'3306',
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